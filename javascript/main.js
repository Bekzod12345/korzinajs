window.addEventListener("load", () =>{
    let form = document.querySelector("form")
    let MARKETS = mahsulotlar.slice(0, 20)
    let templete = document.querySelector("template").content
    let cart__items = document.querySelector(".cart__items")
    let market__items = document.querySelector(".products__item")
    let search__market= document.querySelector(".products__search")
    let select__model = document.querySelector(".select__model")
    let bookmark__template = document.querySelector(".bookmark__template").content
    const bookmark = window.localStorage.getItem("bookmark") ? JSON.parse(window.localStorage.getItem("bookmark")) : []
    const handleRenderMarket = (arr) =>{
        if(arr?.length){
            market__items.innerHTML = null
            for(let i = 0; i < arr.length; i++){
                let clone = templete.cloneNode(true)
                let img = clone.querySelector(".products__img")
                img.src = arr[i]. bigPoster
                let name = clone.querySelector(".products__name")
                name.textContent = arr[i].name
                let color = clone.querySelector(".products__color")
                color.textContent = arr[i].color
                let buttonn = clone.querySelector(".button_bt")
                buttonn.dataset.id = arr[i].name
                market__items.appendChild(clone)
            }
        }
    }
    let handleFilterModel = (arr) => {
        let result = []
        for(let i = 0; i<arr.length; i++){
            let models = arr[i].model
            for(let si = 0; si<models.length; si++){
                if(!result.includes(models[si])){
                    result.push(models[si])
                }
            }
        }
        return result
    }   
    let model = handleFilterModel(mahsulotlar)
    const handleCreateOption = () =>{
        for(let i = 0; i<model.length; i++){
            let option = document.createElement("option")
            option.value = model[i]
            option.textContent = model[i]
            select__model.appendChild(option)
        }
    }   
     
    handleCreateOption()
    const handleSub = (event) => {
        event.preventDefault()
        let rejex = new RegExp(search__market.value, "gi")
        
        let filter = []
        if(select__model.value === "all"){
            filter = MARKETS
        }else if(select__model.value !== "all"){
            filter = MARKETS.filter(item => item.model.includes(select__model.value))
        }
        if(search__market.value.length){
            filter = filter.filter(item => item.name.match(rejex) )
        }
        handleRenderMarket(filter)
    } 
    let handleRenderBookmarkMovies = (arr) => {

        if(arr?.length){  
            cart__items.innerHTML = null
          for(let i = 0; i < arr.length; i++){
            let clone = bookmark__template.cloneNode(true)
            let name = clone.querySelector(".products__name")
            name.textContent = arr[i].model
            let delete__btn = clone.querySelector(".delete__btn")
            delete__btn.dataset.id = arr[i].name
            let rasm = clone.querySelector(".products__img")
            rasm.src = arr[i].bigPoster
            cart__items.appendChild(clone)
    
          }

        }else{
          cart__items.innerHTML = null
            let h2 = document.createElement("h2")
          h2.textContent = "Hali Saqlanmagan Korzinka"
          h2.classList.add("text-danger")
          cart__items.appendChild(h2)

        }
    
       }
          const handleClick = (event) => { 
            let id = event.target.dataset.id
            if(event.target.matches(".button_bt")){ 
              let model = mahsulotlar.find(item => item.name === id)
               if(bookmark?.length){
                  if(!bookmark.some(item => item.name === id)){
                            bookmark.push(model)
                           handleRenderBookmarkMovies(bookmark)
                             window.localStorage.setItem("bookmark", JSON.strinify(bookmark))
                  }
               }else{
                bookmark.push(model)
                handleRenderBookmarkMovies(bookmark)
                window.localStorage.setItem("bookmark", JSON.stringify(bookmark)) 

               }
          }else if(event.target.closest(".delete__btn")){
          
           let filter = bookmark.filter(item => item.name !== id)
           handleRenderBookmarkMovies(filter)
           window.location.reload()
           window.localStorage.setItem("bookmark", JSON.stringify(filter))
          }

        } 
          
          window.addEventListener("click", handleClick)
          form.addEventListener("submit", handleSub)
          handleRenderBookmarkMovies(bookmark)
         
          handleRenderMarket(MARKETS =  mahsulotlar.slice(0, 20))
})


















































// window.addEventListener("load", () =>{

//     "use strict" 
//     const form = getElement("form") 
//     const template = getElement("template").content 
//     const products__item = getElement(".products__item") 
//     const products__search = getElement(".products__search");
//     let ssss = getElement(".select__model")
//     const  bookmark__template = getElement(".bookmark__template").content
//     const button = getElement(".button_btn")
//     let PRODUCTS = mahsulotlar
//     const cart = window.localStorage.getItem("mahsulotlar") ? JSON.parse(window.localStorage.getItem("mahsulotlar")) :[] 
//     const handleRenderMahsulotlar = (arr) => { 
//         if(arr?.length){ 
//             products__item.innerHTML = null 
//             for(let i = 0; i<arr.length; i++){ 
//                 let clone = template.cloneNode(true) 
//                 let name = clone.querySelector(".products__name") 
//                 name.textContent = arr[i].name 
//                 let img = clone.querySelector(".products__img")  
//                 img.src = arr[i].bigPoster 
//                 let model = clone.querySelector(".products__model") 
//                 model.textContent = arr[i].model 
//                 let color = clone.querySelector(".products__color") 
//                 color.textContent = arr[i].color 
//                 let price = clone.querySelector(".products__price") 
//                 price.textContent = arr[i].price 
//                 products__item.appendChild(clone) 
//             } 
//         } 
//     }

//         // let result = []
//         // let handleFilterCategory = (arr) => {
//         //   for (let i = 0; i < arr.length; i++){
//         //     let model = arr[i].model
//         //       for (let si  = 0; si < model.length; si++){
//         //           if(!result.includes(model[si])){
//         //                 result.push(model[si])
//         //           }
            
//         //       }

//         //   }
//         //    return result
//         // }
//     //     const  handleCreateOption = () => {

//     //         let model = handleFilterCategory = (mahsulotlar)  
//     //         for(let i = 0; i < mahsulotlar.length; i++){
//     //             let option = document.createElement("option")
//     //             option.value = select__model[i]
//     //             option.textContent = select__model[i]
//     //             select__model.appendChild(option)
//     //         }  
//     //     }
//     //        handleCreateOption()
//     // } 
//     let handleFilterModel = (arr) => {
//         let result = []
//         for(let i  = 0; i < arr.length; i++){
//             let category = arr[i].mahsulotlar
//             for(let si = 0; si < model.length; si++){
//                   if(!result.includes(model[si])){
//                          result.push(model[si])
//                   }
//             }
//         }
//        return result
//     }
//     let handleModelOption = () => {
//       let mahsulotlar = handleFilterModel(mahsulotlar)
//       for(let i = 0; i < mahsulotlar.length; i++){
//         let option = document.createElement("option")
//         option.value = mahsulotlar[i]
//         option.textContent = mahsulotlar [i]
//         select__model.appendChild(option)
//       }

//   }
//   handleModelOption()
//     const handleSub = (event) => { 
//         event.preventDefault() 
//         let rejex = new RegExp(products__search.value, "gi") 
//         let filter= [] 
//         if(products__search.value.length){ 
//            filter = mahsulotlar.filter(item => item.name.match(rejex))  
//            console.log(filter); 
//         } 
        
//         handleRenderMahsulotlar(filter) 
//     } 
//         form.addEventListener("submit", handleSub) 
//         const handleClick = (event) => { 
//             if(event.target.matches(".button_btn")){ 
//                 let id = event.target.dataset.id 
//                 let mahsulotlar = PRODUCTS.find(item => item.id === id) 
//                 if(mahsulotlar.length){ 
//                     let some = mahsulotlar.some(item => item.id === id) 
//                     console.log(some); 
//                 }else{ 
//                     cart.push(mahsulotlar) 
//                     handleRenderMahsulotlar(mahsulotlar)
//                     window.localStorage.setItem("mahsulotlar", JSON.stringify(mahsulotlar))
//     } 
//           }
//         }
//     form.addEventListener("submit", handleSub) 
//     handleRenderMahsulotlar(mahsulotlar) 
//     window.addEventListener("click", handleClick) 
//     handleRenderMahsulotlar(mahsulotlar) 
// })
