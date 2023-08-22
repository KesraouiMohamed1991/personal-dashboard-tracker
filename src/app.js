const formValuesHistory = [];
const history = document.getElementById('history');
const btn = document.getElementById('btn');
const notification = document.getElementById('notification');
const clear = document.getElementById('clear');
let spending = document.getElementById('spending')
let balance = document.getElementById('balance')
let earning = document.getElementById('earning')
let aside = document.getElementById('aside')
let humbergerMenu = document.getElementById('humberger-menu')
let humbergerMenuClose = document.getElementById('humberger-menu-close')
let date = document.getElementById('date')
let themeToggle = document.getElementById('theme-toggle')

// Initialize all elements
balance.textContent = `${0} €`; 
earning.textContent = `${0} €`; 
spending.textContent = `${0} €`; 



document.addEventListener('DOMContentLoaded', RestoreData);

async function alertee() {
    const { value: formValues } = await Swal.fire({
        title: 'Multiple inputs',
        html: `
            <input id="swal-input-description" class="swal2-input" placeholder="Description">
            <input id="swal-input-amount" class="swal2-input" placeholder="Amount">
            <input id="swal-input-date" class="swal2-input" type="date">
            <select id="swal-input-operation" class="swal2-input">
                <option value="spending">Spending</option>
                <option value="earning">Earning</option>
            </select>`,
        focusConfirm: false,
        preConfirm: () => {
            const description = document.getElementById('swal-input-description').value;
            const amount = document.getElementById('swal-input-amount').value;
            const date = document.getElementById('swal-input-date').value;
            const operation = document.getElementById('swal-input-operation').value;
            return { description, amount, date, operation };
        }
    });

    if (!formValues || isAnyFieldEmpty(formValues)) {
        console.log('Modal dismissed');
        return;
    }

    formValuesHistory.push(formValues);

    // Update the local storage with the new history data
    let localData = localStorage.getItem('history');
    let value = localData ? JSON.parse(localData) : [];

    value.push(formValues);
    localStorage.setItem('history', JSON.stringify(value)); // Update local storage with the updated data

    // Call the displayEntry function to immediately update the history display
    displayEntry(formValues);
    uploadData(formValues)
    return formValues;
}

function isAnyFieldEmpty(values) {
    return Object.values(values).some(value => value === '');
}

function RestoreData() {
    const DataInStorage = localStorage.getItem('history');
    const parsedData = DataInStorage ? JSON.parse(DataInStorage) : [];
    parsedData.forEach((entry) => {
        displayEntry(entry);
        uploadData(entry)

    });

}

function displayEntry(entry) {
    const entryHtml = `
    <li class="flex sm:w-full w-[97%] mt-2 mx-auto justify-between bg-slate-600 rounded-lg mb-1">
            <p class="p-2 inline-block w-1/3 text-start capitalize">${entry.description}</p>
            <p class="p-2 w-1/3 text-center">${entry.amount}€</p>
            <p class="p-2 w-1/3 text-end">${entry.date}</p>
        </li>
    `;

    // Append the new entry directly to the history display
    history.insertAdjacentHTML('beforeend', entryHtml);


}

btn.addEventListener('click', () => {
    const formValues = alertee();
});

clear.addEventListener('click', function () {
    localStorage.clear();
    history.innerHTML = '';
    balance.textContent = `${0} €`; // You can set any initial value you want
    earning.textContent = `${0} €`; // You can set any initial value you want
    spending.textContent = `${0} €`; // You can set any initial value you want  


})

const uploadData = (entry) => {
    const amount = parseInt(entry.amount);

    if (entry.operation === 'earning') {
        if (amount > 0) {
            earning.textContent = `${parseInt(earning.textContent) + amount} €` ;
            balance.textContent = `${parseInt(balance.textContent) + amount} €`;

        }
    } else if (entry.operation === 'spending') {
        if (amount > 0) {
            spending.textContent = `${parseInt(spending.textContent) - amount} €`;
            balance.textContent = `${parseInt(balance.textContent) - amount} €`;
        } else if (amount < 0) {
        }

    }

    

};


const togglemenu = () => {
    aside.classList.toggle('hidden')

}

function showDate() {
    const today = new Date('2023-04-25')
    date.textContent = today.toDateString()

}
showDate()

humbergerMenu.addEventListener('click', togglemenu)
humbergerMenuClose.addEventListener('click', togglemenu)


// Add a click event listener to the themeToggle element
themeToggle.addEventListener('click', function () {
    // Toggle the 'dark' class on the <html> element
    document.documentElement.classList.toggle("dark");
    console.log('themeToggle')

});

