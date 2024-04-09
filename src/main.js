import './styles.css'

const baseUrl = 'https://notes-api.dicoding.dev/v2';

const createNote = async (title, body) => {
  try {
    makeHTTPRequest();

    const response = await fetch(`${baseUrl}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body }),
    });

    if (!response.ok) {
      throw new Error(`Error creating note: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);


    return data.data;
  } catch (error) {
    console.error('Error creating note:', error);
    throw error;
  }
}

const getNonArchivedNotes = async () => {
  try {
    const response = await fetch(`${baseUrl}/notes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { data } = await response.json();

    if (!response.ok) {
      throw new Error(`Error creating note: ${response.statusText}`);
    }
    return data;
  } catch (error) {
    console.error("Error getting non-archived notes:", error.message);
    throw error;
  }
}


const archiveNoteById = async (noteId) => {
  try {
    makeHTTPRequest();

    const url = `${baseUrl}/notes/${noteId}/archive`;
    const response = await fetch(url, { method: 'POST' });

    if (!response.ok) {
      throw new Error(`Error archiving note: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);



    return data.data;
  } catch (error) {
    console.error('Error archiving note:', error);
    throw error;
  }
}

const getArchivedNotes = async () => {
  try {
    const response = await fetch(`${baseUrl}/notes/archived`);
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(`Error getting archived notes: ${responseData.message}`);
    }

    return responseData.data;
  } catch (error) {
    console.error('Error getting archived notes:', error);
    throw error;
  }
}

const deleteNoteById = async (noteId) => {
  try {
    makeHTTPRequest();

    const url = `${baseUrl}/notes/${noteId}`;
    const response = await fetch(url, { method: 'DELETE' });

    if (!response.ok) {
      throw new Error(`Error deleting note: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);


    return data;
  } catch (error) {
    console.error('Error deleting note:', error);
    throw error;
  }
}


const simulateHTTPRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

const showLoadingIndicator = () => {
  const loadingIndicator = document.getElementById('loadingio-spinner-cube-2by998twmg8');
  loadingIndicator.style.display = 'block';
};

const hideLoadingIndicator = () => {
  const loadingIndicator = document.getElementById('loadingio-spinner-cube-2by998twmg8');
  loadingIndicator.style.display = 'none';
};


const makeHTTPRequest = async () => {
  try {
    showLoadingIndicator();
    await simulateHTTPRequest();
    hideLoadingIndicator();
  } catch (error) {
    console.error('Error:', error);
    hideLoadingIndicator();
  }
};

class NoteApp extends HTMLElement {
  connectedCallback() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    .notes-container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
    
    .note {
      flex: 1 0 calc(33.33% - 20px);
      border: 1px solid #ccc;
      border-radius: 8px;
      overflow: hidden;
      background-color: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    
    .note-header {
      padding: 20px;
      background-color: #4CAF50;
      color: #fff;
      font-weight: bold;
      border-bottom: 1px solid #ccc;
      border-radius: 8px 8px 0 0;
    }
    
    .note-body {
      padding: 20px;
    }
    
    .action-buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
    
    .action-buttons button {
      background-color: #1976D2;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 8px 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    
    .action-buttons button:hover {
      background-color: #0D47A1;
    }
</style>

      <div class="note">
        <h2>${this.getAttribute('title')}</h2>
        <p>${this.getAttribute('body')}</p>
        <div class="action-buttons">
          <button class="archive-button">Archive</button>
          <button class="delete-button">Delete</button>
        </div>
      </div>
    `;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  attachEventListeners() {
    this.shadowRoot.querySelector('.action-buttons').addEventListener('click', async (event) => {
      const noteId = this.getAttribute('id');

      if (event.target.classList.contains('archive-button')) {
        try {
          await archiveNoteById(noteId);
          console.log('Note archived successfully.');
          this.remove();
        } catch (error) {
          console.error('Error archiving note:', error);
        }
      } else if (event.target.classList.contains('delete-button')) {
        try {
          await deleteNoteById(noteId);
          console.log('Note deleted successfully.');
          this.remove();
        } catch (error) {
          console.error('Error deleting note:', error);
        }
      }
    });
  }
}

customElements.define('note-app', NoteApp);

document.getElementById('action-button').addEventListener('click', async function (event) {
  event.preventDefault();
  const title = document.getElementById('noteTitle').value;
  const body = document.getElementById('noteBody').value;
  const notesList = document.getElementById('notes-list');

  try {

    const newNote = await createNote(title, body);


    const noteElement = document.createElement('note-app');
    noteElement.setAttribute('title', newNote.title);
    noteElement.setAttribute('body', newNote.body);
    notesList.appendChild(noteElement);


    document.getElementById('noteTitle').value = '';
    document.getElementById('noteBody').value = '';
  } catch (error) {
    console.error('Error creating note:', error);
  }
});

async function displayNonArchivedNotes() {
  const notesList = document.getElementById("notes-list");
  notesList.innerHTML = ""; // Kosongkan daftar catatan sebelum menampilkan yang baru
  
  try {
    const nonArchivedNotes = await getNonArchivedNotes();
    
    nonArchivedNotes.forEach(note => {
      const noteElement = document.createElement("note-app");
      noteElement.setAttribute("title", note.title);
      noteElement.setAttribute("body", note.body);
      notesList.appendChild(noteElement);
    });
  } catch (error) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Error: No non-archived notes found.";
    notesList.appendChild(errorMessage);
  }
}

document.getElementById("get-non-archived-notes").addEventListener("click", displayNonArchivedNotes);

document.getElementById('get-archived-notes').addEventListener('click', async () => {
  try {
    const archivedNotes = await getArchivedNotes();
    console.log('Archived Notes:', archivedNotes);
    // Lakukan apa pun yang diperlukan dengan data catatan yang sudah diarsipkan
  } catch (error) {
    console.error('Error fetching archived notes:', error);
  }
});

const notesData = [
  {
    id: 'notes-jT-jjsyz61J8XKiI',
    title: 'Welcome to Notes, Dimas!',
    body: 'Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.',
    createdAt: '2022-07-28T10:03:12.594Z',
    archived: false,
  },
  {
    id: 'notes-aB-cdefg12345',
    title: 'Meeting Agenda',
    body: 'Discuss project updates and assign tasks for the upcoming week.',
    createdAt: '2022-08-05T15:30:00.000Z',
    archived: false,
  },
  {
    id: 'notes-XyZ-789012345',
    title: 'Shopping List',
    body: 'Milk, eggs, bread, fruits, and vegetables.',
    createdAt: '2022-08-10T08:45:23.120Z',
    archived: false,
  },
];


function renderNotes() {
  const notesList = document.getElementById('notes-list');



  notesData.forEach(note => {
    const noteElement = document.createElement('note-app');
    noteElement.setAttribute('title', note.title);
    noteElement.setAttribute('body', note.body);
    notesList.appendChild(noteElement);
  });
}

renderNotes();