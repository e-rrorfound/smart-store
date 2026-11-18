// Lógica do Carrinho e Finalização via WhatsApp
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
    toggleCart();
}

function updateQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
    }
    updateCartUI();
}

function updateCartUI() {
    const badge = document.getElementById('cartBadge');
    const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
    badge.innerText = totalItems;
    if (totalItems > 0) {
        badge.classList.remove('scale-0');
        badge.classList.add('scale-100');
    } else {
        badge.classList.remove('scale-100');
        badge.classList.add('scale-0');
    }

    const container = document.getElementById('cartItemsContainer');
    if (cart.length === 0) {
        container.innerHTML = `<div class="text-center py-12 text-stone-400 text-sm">Seu carrinho está vazio.</div>`;
    } else {
        container.innerHTML = cart.map(item => `
            <div class="flex items-center space-x-4 bg-stone-50 p-3 rounded-2xl border border-stone-200">
                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-xl">
                <div class="flex-1 min-w-0">
                    <h4 class="font-semibold text-stone-900 text-sm truncate">${item.name}</h4>
                    <p class="text-emerald-600 font-bold text-sm mt-0.5">R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</p>
                    <div class="flex items-center space-x-2 mt-2">
                        <button onclick="updateQuantity(${item.id}, -1)" class="w-6 h-6 rounded-md bg-stone-200 hover:bg-stone-300 text-stone-700 flex items-center justify-center text-xs transition">-</button>
                        <span class="text-xs font-semibold text-stone-800">${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)" class="w-6 h-6 rounded-md bg-stone-200 hover:bg-stone-300 text-stone-700 flex items-center justify-center text-xs transition">+</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    document.getElementById('cartSubtotal').innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
}

function toggleCart() {
    const drawer = document.getElementById('cartDrawer');
    drawer.classList.toggle('hidden');
}

function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }
    let message = "Olá! Gostaria de finalizar o seguinte pedido:\n\n";
    cart.forEach(item => {
        message += `• ${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
    });
    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    message += `\n*Total: R$ ${subtotal.toFixed(2).replace('.', ',')}*\n\nComo proceder com o pagamento e entrega?`;
    
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/5527999999999?text=${encoded}`, '_blank');
}
