document.getElementById("carrinho").addEventListener("click", function(AbrirCarrinho){
    const carrinho = document.getElementById("area-carrinho")

    carrinho.classList.toggle("active")
}) 

document.getElementById("menu").addEventListener("click", function(a){
    const areaMenu = document.getElementById("informacoes-menu")

    areaMenu.classList.toggle("active")

})

const BotoesAdicionar = document.querySelectorAll(".botao") 
const areaCarrinho = document.getElementById("area-carrinho")
const mensagem = document.getElementById("mensagem")

BotoesAdicionar.forEach(function(botao){{
    botao.addEventListener("click", function(){{
        const produto = this.parentElement;;
        const nome = produto.querySelector(".descricao-produto").textContent;
        const precoTexto = produto.querySelector(".preco-produto").textContent;
        const preco = parseFloat(precoTexto.replace("R$"," ").replace(",",".").trim());
        const foto = produto.querySelector("img").src
       

        let quantidade = 1
        let subtotal= preco

        const item = document.createElement("div");
        item.classList.add("item-carrinho");
        item.innerHTML = `<img src="${foto}">
        <p>${nome}</p>
        <p> ${preco.toFixed(2)}</p>      
        <div class="controle-quantidade">
            <button class="menos">-</button>
            <span class="quantidade">${quantidade}</span>
            <button class="mais">+</button>
            <button class="btn-remover">Rem</button>
        </div>
        <p class="subtotal">Subtotal: R$${subtotal.toFixed(2)}</p>      
        `;

        areaCarrinho.appendChild(item);
        areaCarrinho.classList.add("active");
        mensagem.classList.add("show");
 
        setTimeout(()=>{
            mensagem.classList.remove("show");    
        },1000) 

        const btnMais = item.querySelector(".mais");
        const btnMenos = item.querySelector(".menos");
        const spanQuantidade = item.querySelector(".quantidade");
        const subtotalElemento = item.querySelector(".subtotal");
        const btnremover = item.querySelector(".btn-remover")

        btnMais.addEventListener("click", function(mais){
            quantidade++
            spanQuantidade.textContent = quantidade
            subtotalElemento.textContent = `Subtotal: R$${(quantidade * preco).toFixed(2)}`;
        });
        btnMenos.addEventListener("click", () => {
            if (quantidade > 1) {
              quantidade--;
              spanQuantidade.textContent = quantidade;
              subtotalElemento.textContent = `Subtotal: R$${(quantidade * preco).toFixed(2)}`;
            }
          });

          btnremover.addEventListener("click",function(remover){
            item.remove()
          })
    }})
}})


const btncarrinho = document.getElementById("carrinho")
const areacarrinho = document.getElementById("area-carrinho")
const botoesRemover = document.getElementsByClassName("btn-remover");


document.addEventListener("click", function (fecharcarrinho) {
    const target = fecharcarrinho.target;
    const clickbtn = btncarrinho.contains(target);
    const clickcarrinho = areacarrinho.contains(target);
    const remover = target.matches(".btn-remover");
  
    if (!clickbtn && !clickcarrinho && !remover) {
      areacarrinho.classList.remove("active");
    }
  });

const btnmenu = document.getElementById("menu")
const areamenu = document.getElementById("informacoes-menu")
document.addEventListener("click", function(fecahrmenu){
    const clickmenu = btnmenu.contains(fecahrmenu.target)
    const clickareamenu = areamenu.contains(fecahrmenu.target)
 

    if(!clickareamenu && ! clickmenu){
        areamenu.classList.remove("active")
    }
})

const btncomprar = document.getElementById("comprar").addEventListener("click", function(fecharcarrinho){
    areacarrinho.classList.remove("active")
})


