const apiUrl = "http://localhost:5000/api/items";

/**
 *
 * @returns {Promise<void>}
 */
async function fetchItems() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.items.length > 0) {
            const itemList = document.getElementById("itemList");
            itemList.innerHTML = "";

            data.items.forEach(item => {
                const li = document.createElement("li");
                li.innerHTML = `
                    ${item.name}
                    <button onclick="editItem(${item.id}, '${item.name}')">✏️</button>
                    <button onclick="deleteItem(${item.id})">❌</button>
                `;
                itemList.appendChild(li);
            });
        }

    } catch (error) {
        console.error('Error:', error);  // This will display any errors
    }
}

/**
 * Add new item
 * @returns {Promise<void>}
 */
async function addItem() {
    try {
        const itemName = document.getElementById("itemName").value;
        if (!itemName) return alert("Enter item name!");

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name: itemName})
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        document.getElementById("itemName").value = "";
        fetchItems();

    } catch (error) {
        console.error('Error:', error);  // This will display any errors
    }
}

/**
 * Edit an item
 * @param id
 * @param currentName
 * @returns {Promise<void>}
 */
async function editItem(id, currentName) {
    try {
        const newName = prompt("Edit item name:", currentName);
        if (!newName) return;

        const response = await fetch(`${apiUrl}/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name: newName})
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        document.getElementById("itemName").value = "";
        fetchItems();

    } catch (error) {
        console.error('Error:', error);  // This will display any errors
    }
}

/**
 * Delete an item
 * @param id
 */
async function deleteItem(id) {
    try {
        const response = await fetch(`${apiUrl}/${id}`, {method: "DELETE"});
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        fetchItems();
    } catch (error) {
        console.error('Error:', error);  // This will display any errors
    }
    fetch(`${apiUrl}/${id}`, {method: "DELETE"})
        .then(() => fetchItems());
}

fetchItems();
