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
                        <h3 class="text-lg font-semibold">Name: ${item.name}</h3>
                        <h3 class="text-lg font-semibold"><h3>Username: </h3>${item.username}</h3>
                        <p class="mt-2 text-sm text-slate-500 leading-relaxed"><h1 class:"text-medium">Email: </h1>${item.email}</p>
                        <p class="mt-2 text-sm text-slate-500 leading-relaxed"><h1 class:"text-medium">Street: </h1> ${item.address.street}</p>
                        <p class="mt-2 text-sm text-slate-500 leading-relaxed"><h1 class:"text-medium">Suite: </h1>${item.address.suite}</p>
                        <p class="mt-2 text-sm text-slate-500 leading-relaxed"><h1 class:"text-medium">City: </h1>${item.address.city}</p>
                        <p class="mt-2 text-sm text-slate-500 leading-relaxed"><h1 class:"text-medium">Zipcode: </h1>${item.address.zipcode}</p>
                        <p class="mt-2 text-sm text-slate-500 leading-relaxed"><h1 class:"text-medium">Lat: </h1>${item.address.geo.lat}</p>
                        <p class="mt-2 text-sm text-slate-500 leading-relaxed"><h1 class:"text-medium">Lng: </h1>${item.address.geo.lng}</p>
                        <p class="mt-2 text-sm text-slate-500 leading-relaxed"><h1 class:"text-medium">Phone: </h1>${item.phone}</p>
                        <p class="mt-2 text-sm text-slate-500 leading-relaxed"><h1 class:"text-medium">Website: </h1>${item.website}</p>
                        <p class="mt-2 text-sm text-slate-500 leading-relaxed"><h1 class:"text-medium">Company-name: </h1>${item.company.name}</p>
                        <p class="mt-2 text-sm text-slate-500 leading-relaxed"><h1 class:"text-medium">catchPhrase: </h1>${item.company.catchPhrase}</p>
                        <p class="mt-2 text-sm text-slate-500 leading-relaxed"><h1 class:"text-medium">company-bs: </h1>${item.company.bs}</p>
                        
                    </div>
                </div>
    </div>`
            })
        })

}

