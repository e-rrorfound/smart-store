// Lógica principal de renderização, filtros e busca
let currentFilter = 'all';

function renderProducts(items) {
    const grid = document.getElementById('productGrid');
    if (items.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-12 text-stone-500">Nenhum produto encontrado.</div>`;
        return;
    }

    grid.innerHTML = items.map(p => `
        <div class="bg-white rounded-2xl border border-stone-200/80 overflow-hidden hover:shadow-xl transition duration-300 flex flex-col group">
            <div class="relative bg-stone-100 overflow-hidden aspect-square cursor-pointer" onclick="openModal(${p.id})">
                <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                ${p.badge ? `<span class="absolute top-3 left-3 bg-stone-900 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm">${p.badge}</span>` : ''}
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <span class="text-xs font-semibold text-emerald-600 uppercase tracking-wider">${p.category}</span>
                    <h3 class="font-bold text-lg text-stone-900 mt-1 mb-2 cursor-pointer hover:text-emerald-600 transition" onclick="openModal(${p.id})">${p.name}</h3>
                    <p class="text-stone-500 text-sm line-clamp-2 mb-4">${p.description}</p>
                </div>
                <div>
                    <div class="flex items-baseline space-x-2 mb-4">
                        <span class="text-2xl font-black text-stone-900">R$ ${p.price.toFixed(2).replace('.', ',')}</span>
                        ${p.oldPrice ? `<span class="text-sm text-stone-400 line-through">R$ ${p.oldPrice.toFixed(2).replace('.', ',')}</span>` : ''}
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                        <button onclick="openModal(${p.id})" class="bg-stone-100 hover:bg-stone-200 text-stone-800 py-2.5 px-3 rounded-xl font-medium text-xs transition text-center">
                            Detalhes
                        </button>
                        <button onclick="addToCart(${p.id})" class="bg-stone-900 hover:bg-emerald-600 text-white py-2.5 px-3 rounded-xl font-medium text-xs transition flex items-center justify-center space-x-1.5 shadow-sm">
                            <i class="fa-solid fa-cart-plus"></i>
                            <span>Comprar</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function filterCategory(category) {
    currentFilter = category;
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('bg-stone-900', 'text-white', 'shadow-sm');
        btn.classList.add('bg-stone-200', 'text-stone-700', 'hover:bg-stone-300');
    });
    event.target.classList.remove('bg-stone-200', 'text-stone-700', 'hover:bg-stone-300');
    event.target.classList.add('bg-stone-900', 'text-white', 'shadow-sm');

    applySearchAndFilter();
}

function applySearchAndFilter() {
    const query = (document.getElementById('searchInput').value || document.getElementById('searchInputMobile').value).toLowerCase();
    let filtered = products.filter(p => {
        const matchesCategory = currentFilter === 'all' || p.category === currentFilter;
        const matchesQuery = p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query);
        return matchesCategory && matchesQuery;
    });
    renderProducts(filtered);
}

document.getElementById('searchInput').addEventListener('input', (e) => {
    document.getElementById('searchInputMobile').value = e.target.value;
    applySearchAndFilter();
});
document.getElementById('searchInputMobile').addEventListener('input', (e) => {
    document.getElementById('searchInput').value = e.target.value;
    applySearchAndFilter();
});

function openModal(id) {
    const product = products.find(p => p.id === id);
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div class="rounded-2xl overflow-hidden bg-stone-100 aspect-square">
            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
        </div>
        <div class="space-y-4">
            <span class="text-xs font-semibold text-emerald-600 uppercase tracking-wider">${product.category}</span>
            <h2 class="text-2xl font-bold text-stone-900">${product.name}</h2>
            <p class="text-stone-600 text-sm leading-relaxed">${product.description}</p>
            <div class="flex items-baseline space-x-2 pt-2">
                <span class="text-3xl font-black text-stone-900">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
                ${product.oldPrice ? `<span class="text-sm text-stone-400 line-struct">R$ ${product.oldPrice.toFixed(2).replace('.', ',')}</span>` : ''}
            </div>
            <button onclick="addToCart(${product.id}); closeModal();" class="w-full bg-stone-900 hover:bg-emerald-600 text-white font-medium py-3 px-4 rounded-xl transition shadow-md flex items-center justify-center space-x-2">
                <i class="fa-solid fa-cart-plus"></i>
                <span>Adicionar ao Carrinho</span>
            </button>
        </div>
    `;
    document.getElementById('productModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('productModal').classList.add('hidden');
}

// Initial Render
renderProducts(products);
