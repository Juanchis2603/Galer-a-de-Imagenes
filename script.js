let url = [];
let descripcion = [];

const btminsanowaza = document.querySelector(".btminsanowaza");
btminsanowaza.addEventListener("click", () => {
    const inputjuan = document.querySelector(".juan");
    const inputjuanchisuwu = document.querySelector(".juanchisuwu");

    const cesaruwuinsanowaza = inputjuan.value.trim();
    const juanchisuwu = inputjuanchisuwu.value.trim();

    if (!cesaruwuinsanowaza || !juanchisuwu) {
        alert("Ingresa la fokin url y la fokin decripcion culero!");
        return;
    }

    url.push(cesaruwuinsanowaza);
    descripcion.push(juanchisuwu);

    // Agregar imagen y descripción al DOM
    const galeriaDiv = document.querySelector(".cesaruwuinsanowaza");
    const contenedor = document.createElement("div");
    contenedor.style.marginBottom = "20px";

    const img = document.createElement("img");
    img.src = cesaruwuinsanowaza;
    img.alt = juanchisuwu;
    img.style.maxWidth = "300px";
    img.style.display = "block";

    const desc = document.createElement("p");
    desc.textContent = juanchisuwu;

    contenedor.appendChild(img);
    contenedor.appendChild(desc);
    galeriaDiv.appendChild(contenedor);

    inputjuan.value = "";
    inputjuanchisuwu.value = "";
});