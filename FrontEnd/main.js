const API_URL = "http://localhost:4242/api/academicEdu";

async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

function handleError(error) {
  console.error("Error:", error);
}

function createAcademicElement(academicEdu) {
  const institutionH2 = document.createElement("h2");
  institutionH2.textContent = academicEdu.institution;

  const courseNameUl = document.createElement("ul");
  const courseNameLi = document.createElement("li");
  courseNameLi.textContent = `${academicEdu.courseType}: ${academicEdu.courseName}`;
  courseNameUl.appendChild(courseNameLi);

  const breakElement = document.createElement("br");

  return [institutionH2, courseNameUl, breakElement];
}

async function getEducation() {
  try {
    const data = await fetchData(`${API_URL}/get`);
    const academicContainer = document.querySelector("#academic-container");
    academicContainer.innerHTML = ""; // Clear existing elements

    data.forEach((academicEdu) => {
      const elements = createAcademicElement(academicEdu);
      elements.forEach((element) => academicContainer.appendChild(element));

      const editButton = document.createElement("button");
      editButton.textContent = "Editar";
      editButton.classList.add("edit-button");
      editButton.setAttribute("data-id", academicEdu.id);
      academicContainer.appendChild(editButton);

      editButton.addEventListener("click", function () {
        const id = this.dataset.id;
        document.getElementById("editForm").dataset.id = id;
        document.getElementById("editInstitution").value = "";
        document.getElementById("editCourseType").value = "";
        document.getElementById("editCourseName").value = "";
        document.getElementById("editModal").style.display = "flex";
      });

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Remover";
      deleteButton.classList.add("delete-button");
      deleteButton.setAttribute("data-id", academicEdu.id);
      academicContainer.appendChild(deleteButton);

      deleteButton.addEventListener("click", function () {
        const id = this.dataset.id;
        deleteEducation(id).catch(handleError);
      });
    });
  } catch (error) {
    handleError(error);
  }

  updateButtonVisibility();
}

document.addEventListener("DOMContentLoaded", function () {
  getEducation();
});

async function deleteEducation(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Success:", result);
      getEducation();
    } else if (response.status === 404) {
      throw new Error("Entrada de Academic Education não encontrada");
    } else {
      throw new Error("Falha ao excluir a entrada de Academic Education");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

async function postEducation(institution, courseType, courseName) {
  try {
    const data = { institution, courseType, courseName };
    const response = await fetch(`${API_URL}/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log("Success:", result);
    getEducation();
  } catch (error) {
    handleError(error);
  }
}

document
  .getElementById("educationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const institution = document.getElementById("institution").value;
    const courseType = document.getElementById("courseType").value;
    const courseName = document.getElementById("courseName").value;

    postEducation(institution, courseType, courseName);
  });

document.getElementById("addButton").addEventListener("click", function () {
  document.getElementById("modal").classList.add("active-popup");
});

document
  .getElementById("closeAddButton")
  .addEventListener("click", function () {
    document.getElementById("modal").classList.remove("active-popup");
  });

document.querySelectorAll(".close").forEach((closeBtn) => {
  closeBtn.onclick = function () {
    document.getElementById("editModal").style.display = "none";
  };
});

document.querySelectorAll(".modal").forEach((modal) => {
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});

document
  .getElementById("editForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const id = this.dataset.id;
    const institution = document.getElementById("editInstitution").value;
    const courseType = document.getElementById("editCourseType").value;
    const courseName = document.getElementById("editCourseName").value;

    const data = {
      institution: institution,
      courseType: courseType,
      courseName: courseName,
    };

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);

        document.getElementById("editModal").style.display = "none";
        getEducation(); // Atualiza os dados no website com as informações atualizadas do banco de dados
      } else if (response.status === 404) {
        throw new Error("Entrada de Academic Education não encontrada");
      } else {
        throw new Error("Falha ao atualizar a entrada de Academic Education");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  const token = localStorage.getItem("token");

  const addButton = document.getElementById("addButton");

  if (token) {
    addButton.style.display = "block";
  } else {
    addButton.style.display = "none";
  }
});

function updateButtonVisibility() {
  const token = localStorage.getItem("token");
  const editButtons = document.querySelectorAll(".edit-button");
  const deleteButtons = document.querySelectorAll(".delete-button");

  if (token) {
    editButtons.forEach((button) => (button.style.display = "inline-block"));
    deleteButtons.forEach((button) => (button.style.display = "inline-block"));
  } else {
    editButtons.forEach((button) => (button.style.display = "none"));
    deleteButtons.forEach((button) => (button.style.display = "none"));
  }

  const addButton = document.getElementById("addButton");

  if (token) {
    addButton.style.display = "inline-block";
  } else {
    addButton.style.display = "none";
  }
}

updateButtonVisibility();

function logout() {
  localStorage.removeItem("token");
  updateButtonVisibility();
}

const logoutButton = document.getElementById("logoutButton");
logoutButton.style.display = "none";

function checkLoginStatus() {
  const token = localStorage.getItem("token");
  if (token) {
    logoutButton.style.display = "inline-block";
  } else {
    logoutButton.style.display = "none";
  }
  if (token) {
    addButton.style.display = "inline-block";
  } else {
    addButton.style.display = "none";
  }
}

checkLoginStatus();
