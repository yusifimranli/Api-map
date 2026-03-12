let user = document.getElementById('users')
function getData(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            data.map(item =>{
                user.innerHTML +=  `
                <div class="bg-white border border-gray-200 shadow-md w-full max-w-sm rounded-lg overflow-hidden mt-4">
                <div class="p-6">
                    <div>
                        <h3 class="text-lg font-semibold">${item.name}</h3>
                        <h3 class="text-lg font-semibold">${item.username}</h3>
                        <p class="mt-2 text-sm text-slate-500 leading-relaxed">${item.email}</p>
                        <p class="mt-2 text-sm text-slate-500 leading-relaxed">${item.address.street}</p>
                        <p class="mt-2 text-sm text-slate-500 leading-relaxed">${item.address.suite}</p>
                        <p class="mt-2 text-sm text-slate-500 leading-relaxed">${item.address.city}</p>
                        <p class="mt-2 text-sm text-slate-500 leading-relaxed">${item.address.zipcode}</p>
                        <p class="mt-2 text-sm text-slate-500 leading-relaxed">${item.address.geo.lat}</p>
                        <p class="mt-2 text-sm text-slate-500 leading-relaxed">${item.address.geo.lng}</p>
                        <p class="mt-2 text-sm text-slate-500 leading-relaxed">${item.phone}</p>
                        <p class="mt-2 text-sm text-slate-500 leading-relaxed">${item.website}</p>
                        <p class="mt-2 text-sm text-slate-500 leading-relaxed">${item.company.name}</p>
                        <p class="mt-2 text-sm text-slate-500 leading-relaxed">${item.company.catchPhrase}</p>
                        <p class="mt-2 text-sm text-slate-500 leading-relaxed">${item.company.bs}</p>
                        
                    </div>
                </div>
    </div>`
            })
        })
}