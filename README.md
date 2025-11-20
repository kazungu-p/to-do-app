#Live link

https://to-do-app-ten-self-29.vercel.app/ 

🚀 Features

➕ Add Tasks — Type into the input field and click Add.

🗑️ Delete Tasks — Remove any task from the list instantly.

⚛️ React Hooks — Built using useState for state management.

🎨 Custom Styles — Styled using App.css.

🧩 Project Structure
src/
│── App.jsx
│── ToDoItem.jsx
│── assets/
│     └── App.css
└── main.jsx

📦 Installation & Setup

Clone the repository

git clone <your-repo-url>
cd your-project-folder


Install dependencies

npm install


Run the development server

npm run dev


Open your browser and go to:

http://localhost:5173

🧠 How It Works
State Variables

addedText — stores the current input text.

items — stores an array of to-do list items.

Key Functions

handleChange() — updates input value.

addItem() — adds a new item to the list.

deleteItem(id) — removes item by index.

getItems() — renders each list item using the ToDoItem component.

🧱 Example Code Snippet
setItems(prev => [addedText, ...prev]);


Your list always stays updated by prepending the newest task.

🗑️ Deleting Items

Each ToDoItem component receives:

<ToDoItem 
  text={item} 
  key={index} 
  id={index} 
  onDelete={deleteItem}
/>


Clicking a delete button triggers onDelete(id), which filters the array.

🎯 Future Improvements

Add task categories

Add animations

Add ability to edit tasks

Store tasks using localStorage

📄 License

This project is open source and available under the MIT License.