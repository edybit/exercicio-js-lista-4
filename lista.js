export const  adicionar= (item)=>{

    if(localStorage.getItem("listaProdutos") == null){
        const lista=localStorage.setItem("listaProdutos",JSON.stringify([item]));
        return lista;
    }

    const listaP=localStorage.getItem("listaProdutos");
    const listaPObject=JSON.parse(listaP);

    localStorage.setItem("listaProdutos",JSON.stringify([...listaPObject,item]))
    
}

export const remover=(item)=>{
    const lista=JSON.parse(localStorage.getItem("listaProdutos"));
    for(let i in lista){
        if(item === lista[i].item){
            lista.splice(i,1);
            localStorage.setItem("listaProdutos",JSON.stringify(lista));
            return;
        }
    }
    
}

export const marcar=(item)=>{            
     const lista=JSON.parse(localStorage.getItem("listaProdutos"));
     for(let i in lista){
        if(item.codeBar == lista[i].codeBar){
            lista[i].purchased=true;
            localStorage.setItem("listaProdutos",JSON.stringify(lista));
            return;
        }
     }

}

export const desmarcar=(item)=>{
    const lista=JSON.parse(localStorage.getItem("listaProdutos"));
    for(let i in lista){
        if(item.codeBar == lista[i].codeBar){
            lista[i].purchased=false;
            localStorage.setItem("listaProdutos",JSON.stringify(lista));
            return;
        }
     }
}

export const listar=()=>{
    let listaObjects=JSON.parse(localStorage.getItem("listaProdutos"));
    return listaObjects?listaObjects:[];
}