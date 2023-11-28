import { adicionar, remover, marcar, desmarcar, listar} from "./lista.js";


const nameItem=document.querySelector('.nomeProduto');
const Preco=document.querySelector('.precoProduto');
const addProductList=document.querySelector('#adicionar');
const table=document.querySelector("#tabela");




class Product{
    constructor(item,preco){
        this.item=item;
        this.preco=preco;
        this.purchased=false;
        this.codeBar=(Math.random() * 100000).toFixed(0);
    }
}

function renderizar(){
   
    let lista=listar();
        
    
    
    table.replaceChildren();
    lista.forEach(elemento=>{
        
        let dados=document.createElement('tr');

            let nomeItem=document.createElement('td');
            nomeItem.textContent=elemento.item;
            
            let precoItem=document.createElement('td');
            precoItem.textContent="R$ " +  elemento.preco;

            let inputCheck=document.createElement('input');
            inputCheck.type='checkbox';

            let comprado=document.createElement('td');
            comprado.appendChild(inputCheck);

            let btnRemover=document.createElement('button');
            btnRemover.textContent='Remover';

            
            let acoes=document.createElement('td');
            acoes.appendChild(btnRemover);
            
            btnRemover.addEventListener('click',()=>{
                remover(elemento.item);
                renderizar();
            });

            inputCheck.addEventListener('click',()=>{
                if(inputCheck.checked === true){
                    marcar(elemento);
                    nomeItem.style.backgroundColor='green';
                }
                else if(inputCheck.checked === false){                 
                    desmarcar(elemento);
                    nomeItem.style.backgroundColor='white';
                }
            })

            dados.appendChild(nomeItem);
            dados.appendChild(precoItem);
            dados.appendChild(comprado);
            dados.appendChild(acoes);
            table.appendChild(dados);
    })
}

window.addEventListener('load',()=>{
    

    addProductList.addEventListener('click',()=>{
    
        // Adicionando Produto no Array listaItems e ao localStorage 
        const produto= new Product(nameItem.value,Preco.value);
        adicionar(produto);

        renderizar();
        
    })

    renderizar();
    
});