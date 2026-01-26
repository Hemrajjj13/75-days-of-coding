import React from 'react'
import ProductCard from './ProductCard';

const Catalog = () => {
const products = [
    { id: 1, name: "Wireless Headphones", price: 2999, image: "https://picsum.photos/seed/1/200" },
    { id: 2, name: "Smart Watch", price: 4999, image: "https://picsum.photos/seed/2/200" },
    { id: 3, name: "Bluetooth Speaker", price: 1999, image: "https://picsum.photos/seed/3/200" },
    { id: 4, name: "Gaming Mouse", price: 1499, image: "https://picsum.photos/seed/4/200" },
    { id: 5, name: "Mechanical Keyboard", price: 3499, image: "https://picsum.photos/seed/5/200" },

    { id: 6, name: "Laptop Stand", price: 999, image: "https://picsum.photos/seed/6/200" },
    { id: 7, name: "USB-C Hub", price: 1799, image: "https://picsum.photos/seed/7/200" },
    { id: 8, name: "External Hard Drive", price: 5499, image: "https://picsum.photos/seed/8/200" },
    { id: 9, name: "Portable SSD", price: 6999, image: "https://picsum.photos/seed/9/200" },
    { id: 10, name: "Webcam HD", price: 2599, image: "https://picsum.photos/seed/10/200" },

    { id: 11, name: "Wireless Charger", price: 1299, image: "https://picsum.photos/seed/11/200" },
    { id: 12, name: "Power Bank", price: 1899, image: "https://picsum.photos/seed/12/200" },
    { id: 13, name: "Fitness Band", price: 2499, image: "https://picsum.photos/seed/13/200" },
    { id: 14, name: "Noise Cancelling Earbuds", price: 3999, image: "https://picsum.photos/seed/14/200" },
    { id: 15, name: "Tablet Stand", price: 899, image: "https://picsum.photos/seed/15/200" },

    { id: 16, name: "LED Desk Lamp", price: 1599, image: "https://picsum.photos/seed/16/200" },
    { id: 17, name: "Smart LED Bulb", price: 799, image: "https://picsum.photos/seed/17/200" },
    { id: 18, name: "WiFi Router", price: 2999, image: "https://picsum.photos/seed/18/200" },
    { id: 19, name: "Graphics Tablet", price: 4599, image: "https://picsum.photos/seed/19/200" },
    { id: 20, name: "VR Headset", price: 8999, image: "https://picsum.photos/seed/20/200" },

    { id: 21, name: "Gaming Controller", price: 2499, image: "https://picsum.photos/seed/21/200" },
    { id: 22, name: "Monitor 24-inch", price: 11999, image: "https://picsum.photos/seed/22/200" },
    { id: 23, name: "Laptop Backpack", price: 1999, image: "https://picsum.photos/seed/23/200" },
    { id: 24, name: "Smartphone Gimbal", price: 3499, image: "https://picsum.photos/seed/24/200" },
    { id: 25, name: "Action Camera", price: 12999, image: "https://picsum.photos/seed/25/200" },

    { id: 26, name: "Tripod Stand", price: 1399, image: "https://picsum.photos/seed/26/200" },
    { id: 27, name: "Microphone USB", price: 2799, image: "https://picsum.photos/seed/27/200" },
    { id: 28, name: "Studio Headphones", price: 4999, image: "https://picsum.photos/seed/28/200" },
    { id: 29, name: "Smart Plug", price: 699, image: "https://picsum.photos/seed/29/200" },
    { id: 30, name: "Digital Alarm Clock", price: 999, image: "https://picsum.photos/seed/30/200" },

    { id: 31, name: "Wireless Keyboard", price: 2299, image: "https://picsum.photos/seed/31/200" },
    { id: 32, name: "Wireless Mouse", price: 1199, image: "https://picsum.photos/seed/32/200" },
    { id: 33, name: "Desk Organizer", price: 699, image: "https://picsum.photos/seed/33/200" },
    { id: 34, name: "Smart Thermometer", price: 1499, image: "https://picsum.photos/seed/34/200" },
    { id: 35, name: "Portable Fan", price: 899, image: "https://picsum.photos/seed/35/200" },

    { id: 36, name: "USB Flash Drive 64GB", price: 799, image: "https://picsum.photos/seed/36/200" },
    { id: 37, name: "Memory Card 128GB", price: 1299, image: "https://picsum.photos/seed/37/200" },
    { id: 38, name: "Smart Door Sensor", price: 1799, image: "https://picsum.photos/seed/38/200" },
    { id: 39, name: "Security Camera", price: 5999, image: "https://picsum.photos/seed/39/200" },
    { id: 40, name: "Robot Vacuum Cleaner", price: 15999, image: "https://picsum.photos/seed/40/200" },

    { id: 41, name: "Electric Kettle", price: 2199, image: "https://picsum.photos/seed/41/200" },
    { id: 42, name: "Air Fryer", price: 7499, image: "https://picsum.photos/seed/42/200" },
    { id: 43, name: "Coffee Maker", price: 8999, image: "https://picsum.photos/seed/43/200" },
    { id: 44, name: "Blender", price: 3499, image: "https://picsum.photos/seed/44/200" },
    { id: 45, name: "Smart Weighing Scale", price: 1999, image: "https://picsum.photos/seed/45/200" },

    { id: 46, name: "Electric Toothbrush", price: 2999, image: "https://picsum.photos/seed/46/200" },
    { id: 47, name: "Hair Dryer", price: 2499, image: "https://picsum.photos/seed/47/200" },
    { id: 48, name: "Steam Iron", price: 1899, image: "https://picsum.photos/seed/48/200" },
    { id: 49, name: "Room Heater", price: 4599, image: "https://picsum.photos/seed/49/200" },
    { id: 50, name: "Water Purifier", price: 12999, image: "https://picsum.photos/seed/50/200" }
];


    return (
    <div>
        <h1>Interactive Product Catalog</h1>
        <ProductCard products={products}/>
        {/* {products.map(product => (
            <ProductCard
                key={product.id}
                id={product.id} 
                name={product.name}
                price={product.price}
                image={product.image}
            />
        ))} */}
    </div>
    )
}

export default Catalog