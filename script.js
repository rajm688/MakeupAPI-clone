// creatingthe main container element
let div = document.createElement("div")
div.className = "container"
//heading
let heading = document.createElement("h3")
heading.setAttribute("class","text-center display-4 m-4 ")
heading.innerText="Makeup API"
div.appendChild(heading)
//para
let para = document.createElement("p")
para.className="container text-justify p-1 m-4"
para.innerText= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquam fuga nihil debitis, deleniti tempore maiores optio enim delectus amet. Sed doloremque corporis voluptatum vel cupiditate! Tempora, aliquid? Voluptatem, adipisci."
div.appendChild(para)
//creating container for images
let imgdiv = document.createElement("div")
imgdiv.id="image"
imgdiv.setAttribute("class","container-fluid")
//img1
let img1 = document.createElement("img")
img1.className="img"
img1.id = "img1"
img1.setAttribute("src","img1.png")
imgdiv.appendChild(img1)
div.appendChild(imgdiv)
//img2
let img2 = document.createElement("img")
img2.className="img"
img2.id = "img2"
img2.setAttribute("src","img2.png")
imgdiv.appendChild(img2)
div.appendChild(imgdiv)
//img3
let img3 = document.createElement("img")
img3.className="img"
img3.id = "img3"
img3.setAttribute("src","img3.png")
imgdiv.appendChild(img3)
div.appendChild(imgdiv)
//img4
let img4 = document.createElement("img")
img4.className="img"
img4.id = "img4"
img4.setAttribute("src","img4.png")
imgdiv.appendChild(img4)
div.appendChild(imgdiv)
//img5
let img5 = document.createElement("img")
img5.className="img"
img5.id= "img5"
img5.setAttribute("src","img5.png")

imgdiv.appendChild(img5)
div.appendChild(imgdiv)
//About the makeup API - part
let aboutdiv =document.createElement('div')
aboutdiv.className="container bodydiv"
aboutdiv.innerHTML =`<h5 class="font-weight-bold">About the Makeup API</h5><hr><br>
                        <ul>
                            <li><b>Protocol:</b>The transport is HTTP. This API conforms to REST principals</p>
                            <li><b>API Endpoints:</b>The endpoint for the current API version is:
                                    <ul>
                                        <li><a href="http://makeup-api.herokuapp.com/api/v1/products.json">http://makeup-api.herokuapp.com/api/v1/products.json</a></li>
                                    </ul>
                            <li><b>There is currently one API call:</b>Search makeup products</li>
                            <li><b>Type:</b>GET</li>
                            <li><b>Response Format:</b>json</li>
                        </ul>`
div.append(aboutdiv)
let exdiv = document.createElement("div")
exdiv.className="container examplediv"
exdiv.innerHTML =`<h5 class="font-weight-bold">Examples</h5><hr><br>
                    <ul>
                        <li>To search for the brand “maybelline”, append ‘brand=maybelline’. For example:
                            <ul>
                                <li><a href="http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline">http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline</a></li>
                            </ul>
                        <li>To search for the “lipsticks” by the brand “covergirl”, you would append ‘brand=covergirl’ and ‘&product_type=lipstick’. For example:
                            <ul>
                                <li><a href="http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick">http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick</a></li>
                        </li>`
div.appendChild(exdiv)
//search parameter
let searchdiv = document.createElement("div");
searchdiv.className="container search"
searchdiv.innerHTML=`<h5 class="font-weight-bold">Search Parameters</h5><hr><br>
                    <ul>
                        <li>Search for products and filter them by brand, price, product category, tags and many more. Take a look at the full list below!</li>
                        <li>This API also provides visual representation of the all of JSON data that is available as well</li>`
let table = document.createElement("table")
table.className="container table"
table.innerHTML =`  <thead>
                        <tr>
                            <th>Parameter</th>
                            <th>Data Type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>product_type</th>
                            <th>string</th>
                            <td>The type of makeup being searched for (ie. lipstick, eyeliner). See list of product types below. Will return a list of all products of this type</td>
                        </tr>
                        <tr>
                            <th>product_category</th>
                            <th>string</th>
                            <td>Sub-category for each makeup-type. (ie. lip gloss is a category of lipstick). See product types below. If a category exists it will be under 'By Category'. Will return a list of all products of this category</td>
                        </tr>
                        <tr>
                            <th> product_tags</th>
                            <th>string, list separated by commas</th>
                            <td>Options each product could be tagged with. (ie. vegan). each product can have multiple tags. If tags exist it will be in the product types under 'By Tag'. Will return a list of products filtered by all tags indicated</td>
                        </tr>
                        <tr>
                            <th>brand</th>
                            <th>string</th>
                            <td>Brand of the product. Will return all products for each brand</td>
                        </tr>
                        <tr>
                            <th>price_greater_than</th>
                            <th>number</th>
                            <td>Will return a list of products with price greater than indicated number (exclusive)</td>
                        </tr>
                        <tr>
                            <th>price_less_than</th>
                            <th>number</th>
                            <td>Will return a list of products with price less than indicated number (exclusive)</td>
                        </tr>
                        <tr>
                            <th>rating_greater_than</th>
                            <th>number</th>
                            <td>Will return a list of products with a rating more than indicated number (exclusive)</td>
                        </tr>
                        <tr>
                            <th>rating_less_than</th>
                            <th>number</th>
                            <td>Will return a list of products with a rating less than indicated number (exclusive)</td>
                        </tr>
                    </tbody>`
searchdiv.append(table)
div.append(searchdiv)
// Tags list
let tagListHeading =document.createElement("h5");
tagListHeading.className="font-weight-bold"
tagListHeading.innerText="Tags list"
let tagsdiv = document.createElement("div")
tagsdiv.className="container tags"
tagsdiv.innerHTML=` <span class="tag">Canadian</span> 
                    <span class="tag">CertClean</span>
                    <span class="tag">Chemical Free</span>
                    <span class="tag">Dairy Free</span>
                    <span class="tag">EWG Verified</span>
                    <span class="tag">EcoCert</span>
                    <span class="tag">Fair Trade</span>
                    <span class="tag">Gluten Free</span>
                    <span class="tag">Hypoallergenic</span>
                    <span class="tag">Natural</span>
                    <span class="tag">No Talc</span>
                    <span class="tag">Non-GMO</span>
                    <span class="tag">Organic</span>
                    <span class="tag">Peanut Free Product</span>
                    <span class="tag">Sugar Free</span>
                    <span class="tag">USDA Organic</span>
                    <span class="tag">Vegan</span>
                    <span class="tag">alcohol free</span>
                    <span class="tag">cruelty free</span>
                    <span class="tag">oil free</span>
                    <span class="tag">purpicks</span>
                    <span class="tag">silicone free</span>
                    <span class="tag">water free</span>`
div.appendChild(tagListHeading)
div.append(tagsdiv)
// Brands list
let brandListHeading =document.createElement("h5");
brandListHeading.className="font-weight-bold"
brandListHeading.innerText="Brand list"
let branddiv = document.createElement("div")
branddiv.className="container tags"
branddiv.innerHTML=` <span class="tag">almay</span> 
                    <span class="tag">alva</span>
                    <span class="tag">anna sui</span>
                    <span class="tag">annabelle</span>
                    <span class="tag">benefit</span>
                    <span class="tag">boosh</span>
                    <span class="tag">burt's bees</span>
                    <span class="tag">butter london</span>
                    <span class="tag">c'est moi</span>
                    <span class="tag">cargo cosmetics</span>
                    <span class="tag">china glaze</span>
                    <span class="tag">clinique</span>
                    <span class="tag">coastal classic creation</span>
                    <span class="tag">colourpop</span>
                    <span class="tag">covergirl</span>
                    <span class="tag">dalish</span>
                    <span class="tag">deciem</span>
                    <span class="tag">dior</span>
                    <span class="tag">dr. hauschka</span>
                    <span class="tag">e.l.f.</span>
                    <span class="tag">essie</span>
                    <span class="tag">fenty</span>
                    <span class="tag">glossier</span>
                    <span class="tag">green people</span>
                    <span class="tag">iman</span>
                    <span class="tag">l'oreal</span>
                    <span class="tag">lotus cosmetics usa</span>
                    <span class="tag">maia's mineral galaxy</span>
                    <span class="tag">marcelle</span>
                    <span class="tag">marienatie</span>
                    <span class="tag">maybelline</span>
                    <span class="tag">milani</span>
                    <span class="tag">mineral fusion</span>
                    <span class="tag">misa</span>
                    <span class="tag">mistura</span>
                    <span class="tag">moov</span>
                    <span class="tag">nudus</span>                    
                    <span class="tag">nyx</span>
                    <span class="tag">orly</span>
                    <span class="tag">pacifica</span>
                    <span class="tag">penny lane organics</span>
                    <span class="tag">physicians formula</span>
                    <span class="tag">piggy paint</span>
                    <span class="tag">pure anada</span>
                    <span class="tag">rejuva minerals</span>
                    <span class="tag">revlon</span>
                    <span class="tag">sally b's skin yummies</span>
                    <span class="tag">salon perfect</span>
                    <span class="tag">sinful colours</span>
                    <span class="tag">smashbox</span>
                    <span class="tag">stila</span>
                    <span class="tag">suncoat</span>
                    <span class="tag">w3llpeople</span>
                    <span class="tag">wet n wild</span>
                    <span class="tag">zorah</span>
                    <span class="tag">zorah biocosmetiques</span>
                    `
div.appendChild(brandListHeading)
div.append(branddiv)

//porduct part
let productdiv =document.createElement("div");
productdiv.className="container"
productdiv.innerHTML=` <div class="container-fluid" style="border: 2px solid black;"><tr>

<table><tr>
<td>    
    <img src="http://makeup-api.herokuapp.com/assets/blush-ff7992c3d7690d18a9b0224177cfbdedbc036497cf87c393ec01c6a2ef070258.svg" alt="img">Blush
</td>
<td><ul>
<li> <a href="#">JSON by product</a> </li>
<li>By Category
<ul>
    <li><a href="#">Powder</a> - <a href="#">JSON</a> </li>
    <li><a href="#">Cream</a> - <a href="#">JSON</a> </li>   
</ul>
</li>
<li>By Tag
<ul>
    <li><a href="#">Vegan</a> - <a href="">JSON</a></li>
    <li><a href="#">Gluten free</a> - <a href="">JSON</a></li>
    <li><a href="#">Canadian</a> - <a href="">JSON</a></li>
    <li><a href="#">Natural</a> - <a href="">JSON</a></li>
    <li><a href="#">Non-gmo</a> - <a href="">JSON</a></li>
    <li><a href="#">Purpicks</a> - <a href="">JSON</a></li>
    <li><a href="#">Usda organic</a> - <a href="">JSON</a></li>
    <li><a href="#">Organic </a> - <a href="">JSON</a></li>
    <li><a href="#">Certclean</a> - <a href="">JSON</a></li>
    <li><a href="#">Ewg verified</a> - <a href="">JSON</a></li>
    <li><a href="#">Hypoallergenic</a> - <a href="">JSON</a></li>
    <li><a href="#">No talc</a> - <a href="">JSON</a></li>
</ul>
</li>
</ul></td>
</tr>
</table>
</div> <br>
<div class="container-fluid" style="border: 2px solid black;">
<table>
<tr>
<td>
    
    <img src="http://makeup-api.herokuapp.com/assets/bronzer-2d423487eea3e4571229bd95689bb4eb4331f05740f3921ede7c7c765c7954b1.svg" alt="img">Bronzer</td>
<td><ul>
<li> <a href="#">JSON by product</a> </li>
<li>By Category
<ul>
    <li><a href="#">Powder</a> - <a href="#">JSON</a> </li>  
</ul>
</li>
<li>By Tag
<ul>
    <li><a href="#">Gluten free</a> - <a href="">JSON</a></li>
    <li><a href="#">Canadian</a> - <a href="">JSON</a></li>
    <li><a href="#">Natural</a> - <a href="">JSON</a></li>
    <li><a href="#">Organic </a> - <a href="">JSON</a></li>
    <li><a href="#">Vegan</a> - <a href="">JSON</a></li>
    <li><a href="#">Purpicks</a> - <a href="">JSON</a></li>
    <li><a href="#">Ewg verified</a> - <a href="">JSON</a></li>
</ul>
</li>
</ul></td>
</tr>
</table>
</div>
<br>
<div class="container-fluid" style="border: 2px solid black;">
<table>
<tr>
<td>
    
    <img src="http://makeup-api.herokuapp.com/assets/eyebrow-fc49d8d480ace717203a21fe863c2231970063add91ed2f15181fe8e2d3b96b9.svg" alt="img">Eyebrow</td>
<td><ul>
<li> <a href="#">JSON by product</a> </li>
<li>By Category
<ul>
    <li><a href="#">Pencil</a> - <a href="#">JSON</a> </li>  
</ul>
</li>
<li>By Tag
<ul>
    <li><a href="#">Ewg verified</a> - <a href="">JSON</a></li>
    <li><a href="#">Purpicks</a> - <a href="">JSON</a></li>
</ul>
</li>
</ul></td>
</tr>
</table>
</div>
<br>
<div class="container-fluid" style="border: 2px solid black;">
<table>
<tr>
<td>
    
    <img src="http://makeup-api.herokuapp.com/assets/eyeliner-de329b6d65d721a45190051af1153e23202df9eb1c393d1ac65972376ee42d50.svg" alt="img">Eyeliner</td>
<td><ul>
<li> <a href="#">JSON by product</a> </li>
<li>By Category
<ul>
    <li><a href="#">Liquid</a> - <a href="#">JSON</a> </li> 
    <li><a href="#">Pencil</a> - <a href="#">JSON</a> </li> 
    <li><a href="#">Gel</a> - <a href="#">JSON</a> </li> 
    <li><a href="#">Cream</a> - <a href="#">JSON</a> </li>  
</ul>
</li>
<li>By Tag
<ul>
    <li><a href="#">Vegan</a> - <a href="">JSON</a></li>
    <li><a href="#">Natural</a> - <a href="">JSON</a></li>
    <li><a href="#">Canadian</a> - <a href="">JSON</a></li>
    <li><a href="#">Gluten free</a> - <a href="">JSON</a></li>
    <li><a href="#">Organic </a> - <a href="">JSON</a></li>
    <li><a href="#">Purpicks</a> - <a href="">JSON</a></li>
    <li><a href="#">Certclean</a> - <a href="">JSON</a></li>
    <li><a href="#">Ewg verified</a> - <a href="">JSON</a></li>
    <li><a href="#">Hypoallergenic</a> - <a href="">JSON</a></li>
    <li><a href="#">No talc</a> - <a href="">JSON</a></li>
    
    <li><a href="#">Ecocert</a> - <a href="">JSON</a></li>
</ul>
</li>
</ul></td>
</tr>
</table>
</div>
<br>
<div class="container-fluid" style="border: 2px solid black;">
<table>
<tr>
<td>
    
    <img src="http://makeup-api.herokuapp.com/assets/eyeshadow-67f9f8fd19df1862c95122f9b3460c7e6674d5a6d178cde00e6e4be908dd898a.svg" alt="img">Eyeshadow</td>
<td><ul>
<li> <a href="#">JSON by product</a> </li>
<li>By Category
<ul>
    <li><a href="#">Palette</a> - <a href="#">JSON</a> </li> 
    <li><a href="#">Pencil</a> - <a href="#">JSON</a> </li> 
    <li><a href="#"></a> - <a href="#">JSON</a> </li> 
    <li><a href="#">Cream</a> - <a href="#">JSON</a> </li>  
</ul>
</li>
<li>By Tag
<ul>
    <li><a href="#">Vegan</a> - <a href="">JSON</a></li>
    <li><a href="#">Canadian</a> - <a href="">JSON</a></li>
    <li><a href="#">Natural</a> - <a href="">JSON</a></li>
    <li><a href="#">Gluten free</a> - <a href="">JSON</a></li>
    <li><a href="#">NON-gmo </a> - <a href="">JSON</a></li>
    <li><a href="#">Purpicks</a> - <a href="">JSON</a></li>
    <li><a href="#">Certclean</a> - <a href="">JSON</a></li>
    <li><a href="#">Ewg verified</a> - <a href="">JSON</a></li>
    <li><a href="#">organic</a> - <a href="">JSON</a></li>
    <li><a href="#">Usda organic </a> - <a href="">JSON</a></li>
    <li><a href="#">Hypoallergenic</a> - <a href="">JSON</a></li>
    <li><a href="#">No talc</a> - <a href="">JSON</a></li>
    <li><a href="#">Ecocert</a> - <a href="">JSON</a></li>
</ul>
</li>
</ul></td>
</tr>
</table>
</div>
<br>
<div class="container-fluid" style="border: 2px solid black;">
<table>
<tr>
<td>
    
    <img src="http://makeup-api.herokuapp.com/assets/foundation-9985c8a404d4a19cf7a2985ed504958cadd9f71252a73c90b6a7178bf7075143.svg" alt="img">Foundation</td>
<td><ul>
<li> <a href="#">JSON by product</a> </li>
<li>By Category
<ul>
    <li><a href="#">Concealer</a> - <a href="#">JSON</a> </li> 
    <li><a href="#">Liquid</a> - <a href="#">JSON</a> </li> 
    <li><a href="#">Contour</a> - <a href="#">JSON</a> </li> 
    <li><a href="#">Bb cc</a> - <a href="#">JSON</a> </li>  
    <li><a href="#">Cream</a> - <a href="#">JSON</a> </li>
    <li><a href="#">Mineral</a> - <a href="#">JSON</a> </li>
    <li><a href="#">Powder</a> - <a href="#">JSON</a> </li>
    <li><a href="#">Highlighter</a> - <a href="#">JSON</a> </li>
</ul>
</li>
<li>By Tag
<ul>
    <li><a href="#">Vegan</a> - <a href="">JSON</a></li>
    <li><a href="#">Canadian</a> - <a href="">JSON</a></li>
    <li><a href="#">Natural</a> - <a href="">JSON</a></li>
    <li><a href="#">Gluten free</a> - <a href="">JSON</a></li>
    <li><a href="#">Purpicks</a> - <a href="">JSON</a></li>
    <li><a href="#">Certclean</a> - <a href="">JSON</a></li>
    <li><a href="#">Ewg verified</a> - <a href="">JSON</a></li>
    <li><a href="#">Hypoallergenic</a> - <a href="">JSON</a></li>
    <li><a href="#">No talc</a> - <a href="">JSON</a></li>
    <li><a href="#">Water free </a> - <a href="#">JSON</a> </li>
    <li><a href="#">Cruelty free</a> - <a href="">JSON</a></li>
    <li><a href="#">Alcohol free </a> - <a href="">JSON</a></li>
    <li><a href="#">Oil free </a> - <a href="">JSON</a></li>
    <li><a href="#">Silicone free</a> - <a href="">JSON</a></li>
</ul>
</li>
</ul></td>
</tr>
</table>
</div>
<br>
<div class="container-fluid" style="border: 2px solid black;">
<table>
<tr>
<td>
    
    <img src="http://makeup-api.herokuapp.com/assets/lip_liner-3f40bb63957aa7d47e3a2d1356b9380aa093271e5d58f3518181fd427e388d93.svg" alt="img">Lip liner</td>
<td><ul>
<li> <a href="#">JSON by product</a> </li>
<li>By Category
<ul>
    <li><a href="#">Pencil</a> - <a href="#">JSON</a> </li> 
</ul>
</li>
<li>By Tag
<ul>
    <li><a href="#">Natural</a> - <a href="">JSON</a></li>
    <li><a href="#">Vegan</a> - <a href="">JSON</a></li>
   
    <li><a href="#">Gluten free</a> - <a href="">JSON</a></li>
    <li><a href="#">Certclean</a> - <a href="">JSON</a></li>
    <li><a href="#">Purpicks</a> - <a href="">JSON</a></li>
    
    <li><a href="#">Ewg verified</a> - <a href="">JSON</a></li>
    <li><a href="#">Hypoallergenic</a> - <a href="">JSON</a></li>
    <li><a href="#">No talc</a> - <a href="">JSON</a></li>
    <li><a href="#">Cruelty free</a> - <a href="">JSON</a></li>
</ul>
</li>
</ul>
</td>
</tr>
</table>
</div>
<br>
<div class="container-fluid" style="border: 2px solid black;">
<table>
<tr>
<td>
    
    <img src="http://makeup-api.herokuapp.com/assets/lipstick-4531b48ee71839393857e24c8cbc4dede1f99d2284ef82a6eb0a2a4d03540a14.svg" alt="img">Lipstick</td>
<td><ul>
<li> <a href="#">JSON by product</a> </li>
</ul>
<li>By Category
<ul>
    <li><a href="#">Lipstick</a> - <a href="#">JSON</a> </li> 
    <li><a href="#">Lip gloss</a> - <a href="#">JSON</a> </li> 
    <li><a href="#">Liquid</a> - <a href="#">JSON</a> </li> 
    <li><a href="#">Lip stain</a> - <a href="#">JSON</a> </li> 
</li>
<li>By Tag
<ul>
    <li><a href="#">Canadian </a> - <a href="">JSON</a></li>

    <li><a href="#">Natural</a> - <a href="">JSON</a></li>
    <li><a href="#">Gluten free</a> - <a href="">JSON</a></li>
    <li><a href="#">Non-gmo</a> - <a href="">JSON</a></li>
    <li><a href="#">Peanut free product</a> - <a href="">JSON</a></li>
    <li><a href="#">Vegan</a> - <a href="">JSON</a></li> 
    <li><a href="#">Cruelty free</a> - <a href="">JSON</a></li> 
    <li><a href="#">Organic</a> - <a href="">JSON</a></li> 
    <li><a href="#">Purpicks</a> - <a href="">JSON</a></li>
    <li><a href="#">Certclean </a> - <a href="">JSON</a></li>
    <li><a href="#">Chemical free</a> - <a href="">JSON</a></li>
    <li><a href="#">Purpicks</a> - <a href="">JSON</a></li>
    <li><a href="#">Ewg verified</a> - <a href="">JSON</a></li>
    <li><a href="#">Hypoallergenic</a> - <a href="">JSON</a></li>
    <li><a href="#">No talc</a> - <a href="">JSON</a></li>
</ul>
</li>
</ul></td>
</tr>
</table>
</div>
<br>
<div class="container-fluid" style="border: 2px solid black;">
<table>
<tr>
<td>
    
    <img src="http://makeup-api.herokuapp.com/assets/mascara-0deeeb81e58f31ddbff07847bfd0820e5ecdba1419f4281da743a05e0d6b3e69.svg" alt="img">Maskara</td>
<td><ul>
<li> <a href="#">JSON by product</a> </li>
<li>By Category
<ul>
    <li><a href="#"></a> - <a href="#">JSON</a> </li>
</li>
</ul>
<li>By Tag
<ul>
    <li><a href="#">Natural</a> - <a href="">JSON</a></li>
    <li><a href="#">Gluten free</a> - <a href="">JSON</a></li>
    <li><a href="#">Vegan </a> - <a href="">JSON</a></li>
    
    <li><a href="#">Canadian </a> - <a href="">JSON</a></li>
    <li><a href="#">Organic </a> - <a href="">JSON</a></li>
    <li><a href="#">Purpicks</a> - <a href="">JSON</a></li>
    <li><a href="#">Ewg verified</a> - <a href="">JSON</a></li>
    <li><a href="#">Hypoallergenic</a> - <a href="">JSON</a></li>
    <li><a href="#">Non talc</a> - <a href="">JSON</a></li>
   
    <li><a href="#">Ecocert </a> - <a href="">JSON</a></li>
    <li><a href="#">Usda organic</a> - <a href="">JSON</a></li>
    <li><a href="#">Certclean</a> - <a href="">JSON</a></li>
</ul>
</li>
</ul></td>
</tr>
</table>
</div>
<br>
<div class="container-fluid" style="border: 2px solid black;">
<table>
<tr>
<td>
    
    <img src="http://makeup-api.herokuapp.com/assets/nail_polish-a7e7204834c0c30e8b57a1ba9896656331e228b0daa09d1705d1ab29bc0b7151.svg" alt="img">Nail Polish</td>
<td><ul>
<li> <a href="#">JSON by product</a> </li>
<li>By Tag
<ul>
    <li><a href="#">Vegan</a> - <a href="">JSON</a></li>
    <li><a href="#">Canadian </a> - <a href="">JSON</a></li>
    <li><a href="#">Natural </a> - <a href="">JSON</a></li>
    <li><a href="#">Gluten free</a> - <a href="">JSON</a></li>
    <li><a href="#">Fair trade</a> - <a href="">JSON</a></li>
    <li><a href="#">Sugar free</a> - <a href="">JSON</a></li>
    <li><a href="#">Non-gmo </a> - <a href="">JSON</a></li>
   
    <li><a href="#">Dairy free  </a> - <a href="">JSON</a></li>
</ul>
</li>
</ul></td>
</tr>`


div.append(productdiv)
document.body.append(div)

