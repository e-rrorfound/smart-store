// Base de dados dos produtos da loja (Fácil de adicionar, remover ou editar)
const products = [
    {
        id: 1,
        name: "Smartwatch Ultra Series 9 Pro",
        category: "smartwatch",
        price: 349.90,
        oldPrice: 499.90,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
        badge: "Mais Vendido",
        description: "Caixa em titânio de 49mm, tela Retina Always-On ultra brilhante, bateria de até 7 dias, GPS integrado e sensores avançados de batimentos."
    },
    {
        id: 2,
        name: "Smartwatch Active GT 4",
        category: "smartwatch",
        price: 289.90,
        oldPrice: 380.00,
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=800",
        badge: "Lançamento",
        description: "Design clássico e elegante com pulseira em couro legítimo e silicone inclusa. Monitoramento de mais de 100 modalidades esportivas."
    },
    {
        id: 3,
        name: "Fone Pods Pro Max Wireless",
        category: "fone",
        price: 199.90,
        oldPrice: 279.90,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
        badge: "Destaque",
        description: "Cancelamento ativo de ruído, som imersivo de alta fidelidade e estojo com carregamento por indução."
    },
    {
        id: 4,
        name: "Smartwatch Sport Lite 2",
        category: "smartwatch",
        price: 159.90,
        oldPrice: 220.00,
        image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=800",
        badge: "Oferta",
        description: "Leve e resistente à água (IP68). Ideal para corridas, natação e academias. Notificações direto no pulso."
    },
    {
        id: 5,
        name: "Carregador Portátil MagSafe 10.000mAh",
        category: "acessorio",
        price: 149.90,
        oldPrice: 190.00,
        image: "https://images.unsplash.com/photo-1609592424155-27f12e535a63?auto=format&fit=crop&q=80&w=800",
        badge: "Essencial",
        description: "Carregamento magnético sem fio de alta velocidade. Compacto, carrega smartphone e smartwatch simultaneamente."
    },
    {
        id: 6,
        name: "Pulseira Extra Aço Milanês",
        category: "acessorio",
        price: 69.90,
        oldPrice: 99.90,
        image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&q=80&w=800",
        badge: "Novo",
        description: "Fecho magnético ajustável em malha de aço inoxidável. Sofisticação e durabilidade para seu relógio."
    }
];
