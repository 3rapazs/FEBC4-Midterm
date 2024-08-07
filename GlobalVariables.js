//const PROJECT_NAME = "TEST";
const TITLE = localStorage.getItem("TITLE") === null ? "Learning Online [Free] " : localStorage.getItem("TITLE");
const FOOTER = localStorage.getItem("FOOTER") === null ? "แหล่งรวมคอร์สเรียนออนไลน์": localStorage.getItem("FOOTER"); //"แหล่งรวมคอร์สเรียนออนไลน์";
const TOP_ROWS = isNaN(parseInt(localStorage.getItem("TOP_ROWS"))) ? 3 : parseInt(localStorage.getItem("TOP_ROWS"));

function Initialize()
{


    document.title = TITLE;
    //document.getElementById("ProjectName").innerHTML = PROJECT_NAME


    document.getElementById("Menu").innerHTML += `<li>
            <a href="index.html"><span class="fa fa-home"></span> Home</a>
          </li>`
    document.getElementById("Menu").innerHTML += `<li>
          <a href="coursespage.html"><span class="fa fa-question-circle"></span> Course ทั้งหมด</a>
       </li>`
    document.getElementById("Menu").innerHTML += `<li>
           <a href="quizpage.html"><span class="fa fa-question-circle"></span> คำถาม</a>
        </li>`
       
        document.getElementById("lblFooter").innerText = FOOTER;

    //     document.getElementById("NavBar").innerHTML =  `<nav class="navbar navbar-expand-lg navbar-light bg-light">
    //   <div class="container-fluid">

    //     <button type="button" id="sidebarCollapse" class="btn btn-dark">
    //       <i class="fa fa-bars"></i>
    //       <span class="sr-only">Toggle Menu</span>
    //     </button>
    //     <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <i class="fa fa-bars"></i>
    //     </button>

    //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul class="nav navbar-nav ml-auto">
    //         <!-- <li class="nav-item active">
    //             <a class="nav-link" href="#">Home</a>
    //         </li>
    //         <li class="nav-item">
    //             <a class="nav-link" href="#">About</a>
    //         </li>
    //         <li class="nav-item">
    //             <a class="nav-link" href="#">Portfolio</a>
    //         </li>
    //         <li class="nav-item">
    //             <a class="nav-link" href="#">Contact</a>
    //         </li> -->
    //         <li class="nav-item">
    //           <div class="input-group mb-3">
    //             <div id="divSearch"></div>
    //             <div class="input-group-prepend">
    //               <span class="input-group-text" id="basic-addon1">ค้นหา</span>
    //             </div>
    //             <input type="text" class="form-control" placeholder="ค้นหา" id="txtSearch" aria-describedby="basic-addon1">
    //             <button class="btn btn-dark" onclick="ClickSearch()">ค้นหา</button>
    //           </div>
    //       </li>
    //         <li class="nav-item">
          
    //       </li>

    //       </ul>
    //     </div>
    //   </div>
    // </nav>`




}

function ClickSearch()
{
   let search = document.getElementById("txtSearch").value;
   location.href = "/MidtermProject/coursespage.html?search="+search;
}