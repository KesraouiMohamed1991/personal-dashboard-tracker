document.addEventListener('DOMContentLoaded', function () {

    const RestoreData = () => {
        const DataInStorage = localStorage.getItem('history')
        let parsedData;
        if (DataInStorage === null) {
             parsedData = [];

            'No Data to restore'
        } else {

            parsedData = (JSON.parse(DataInStorage))

            
            console.log(parsedData)
            parsedData.map((entry) => {
                history.innerHTML = `<li class="flex w-full justify-between bg-slate-600 rounded-xl">
                
                <p class="p-4 inline-block" >${entry.description}</p>
                <p class="p-4"> ${entry.amount}$</p>
                <p class="p-4">${entry.date}</p>
            </li>`;


                if (entry.operation === 'earning') {
                    console.log('earning')
                } else {
                    console.log('spending')
                }
            })
        }

        if (!parsedData.inclues(formValues)) {
            parsedData.push(formValues)
        }

    }

    RestoreData()
})


// document.addEventListener('DOMContentLoaded', function () {

//     const RestoreData = () => {
//         const DataInStorage = localStorage.getItem('history')
//         let parsedData=[];
//         if (DataInStorage === null) {

//             'No Data to restore'
//         } else {
//             parsedData = (JSON.parse(DataInStorage))
//             console.log(parsedData)
//             parsedData.map((entry) => {
//                 history.innerHTML = `<li class="flex w-full justify-between bg-slate-600 rounded-xl">
                
//                 <p class="p-4 inline-block" >${entry.description}</p>
//                 <p class="p-4"> ${entry.amount}$</p>
//                 <p class="p-4">${entry.date}</p>
//             </li>`;


//                 if (entry.operation === 'earning') {
//                     console.log('earning')
//                 } else {
//                     console.log('spending')
//                 }
//             })
//         }

//     }

//     RestoreData()
// })