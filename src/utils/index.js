export const treatPrice = (price) => {
    return price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}
