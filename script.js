var arrayVegetables = [
    {
        name: "Xà lách Romaine",
        image: "assets/upload_19074f33c6e1405fabbab2ec49206994_medium.webp",
        gram: "130gr",
        price: 7000 ,
        species: "Xà lách"
    },
    {
        name: "Xà lách Mỡ",
        image: "assets/upload_12288912bf67494181b3a249c951f420_medium(1).webp",
        gram: "130gr",
        price: 7000 ,
        species: "Xà lách"
    },
    {
        name: "Xà lách lô lô tím ",
        image: "assets/upload_78e701032494414fada528897d13d5b3_medium.webp",
        gram: "130gr",
        price: 7000,
        species: "Xà lách"
    },
    {
        name: "Xà lách Ice Berg",
        image: "assets/upload_7633ee25df53483ea4cf1c540d0e3987_medium.webp",
        gram: "100gr",
        price: 7000,
        species: "Xà lách"
    },
    {
        name: "Tỏi",
        image: "assets/upload_a7da9a299d4d436bb2b991121f4e8343_medium.webp",
        gram: "250gr",
        price: 28000,
        species: "Củ"
    },
    {
        name: "Su su non",
        image: "assets/upload_3eb7f6fa9a6043178080f48bdd27a628_medium.webp",
        gram: "300gr",
        price: 10000,
        species: "Củ"
    },
    {
        name: "Súp lơ trắng Mini",
        image: "assets/upload_886589fea40345e0b5d895db3b63b367_medium.webp",
        gram: "450gr",
        price: 23000,
        species: "Súp lơ"
    },
    {
        name: "Rau mồng tơi",
        image: "assets/upload_b64c243e49b84e4e8fccf12d271cd7c7_medium.webp",
        gram: "300gr",
        price: 8000,
        species: "Rau"
    },
    {
        name: "Rau dền",
        image: "assets/upload_b039cd064e414e849ca02879a4227d7e_medium.webp",
        gram: "300gr",
        price: 7000,
        species: "Rau"
    },
    {
        name: "Khoai tây",
        image: "assets/upload_b018401cf93a434ebdb90c18cf8f111a_medium.webp",
        gram: "500gr",
        price: 28000,
        species: "Khoai"
    },
    {
        name: "Khoai sọ",
        image: "assets/upload_d8e7e66eb722447db459b7fcd8f4c02c_medium.webp",
        gram: "1kg",
        price: 35000,
        species: "Khoai"
    },
    {
        name: "Khoai môn",
        image: "assets/upload_7c12802791d9453eac8fadf6b3a33755_medium.webp",
        gram: "500gr",
        price: 30000,
        species: "Khoai"
    },
]

print(arrayVegetables);

function print(array) {
    var string = "";
    for (let i = 0; i < array.length; i++) {
        string += `
        <div class="item">
            <img src="${array[i].image}" alt="" srcset="" usemap="#workmap">
            <map name="workmap"n>
                <area shape="Rect" coords="1,0,238,239" href="#" alt="">
            </map>
            <div class="item-information">
                <p class="name">${array[i].name} - ${array[i].gram}</p>
                <p class="price">${(array[i].price).toLocaleString()}đ</p>
                <button>Chọn Mua</button>
            </div>
        </div>`
    }

    document.getElementById("items-wrapper").innerHTML = string;
}

function filterPrice() {
    let array = []; 
    let price1 = document.getElementById("price-10").checked; 
    let price2 = document.getElementById("price-50").checked;
    let price3 = document.getElementById("price-100").checked;
    let price4 = document.getElementById("price-over").checked;

    if (price1 == true) {
        for (let i = 0; i < arrayVegetables.length; i++) {
            if (arrayVegetables[i].price < 10000) {
                array.push(arrayVegetables[i])
            }
        }
        print(array);
    }
    else if (price2 == true) {
        for (let i = 0; i < arrayVegetables.length; i++) {
            if (arrayVegetables[i].price  >= 10000 && arrayVegetables[i].price < 50000 ) {
                array.push(arrayVegetables[i])
            }
        }
        print(array);
    }
    else if (price3 == true) {
        for (let i = 0; i < arrayVegetables.length; i++) {
            if (arrayVegetables[i].price  >= 50000 && arrayVegetables[i].price <= 100000 ) {
                array.push(arrayVegetables[i])
            }
        } 
        print(array);
    }
    else if (price4 == true) {
        for (let i = 0; i < arrayVegetables.length; i++) {
            if (arrayVegetables[i].price > 100000) {
                array.push(arrayVegetables[i])
            }
        }
        print(array);
    } 
    else {
        print(arrayVegetables);
    }
}