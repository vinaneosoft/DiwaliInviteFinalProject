
let empName;
let inviteForm=document.getElementById("inviteForm");
let place;
inviteForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    document.getElementById("spinner").style.display="block";
    document.getElementById("submit").disabled="true";
    empName=document.getElementById("empName").value; 
    empName=empName.trim();
    place=document.getElementById("location").value;
    let formData=new FormData(inviteForm);
    console.log(formData);
    fetch("https://script.google.com/macros/s/AKfycbxpN9w6zVwgpFq1DXHJO1_qv-l2882pQ4O5Zi0a2jYCMyBR9t_zrUtIlBmkgNNQeMUOfg/exec",
    {
        method:"POST",
        body:formData
    })
    .then(data=>invite());
})
function invite(){
    document.getElementById("employeeName").textContent=empName;
    document.getElementById("instruction").style.display="block";
    if(place==="Pune")
        document.getElementById("PuneInvite").style.display="block";
    else if(place==="Parel")
        document.getElementById("ParelInvite").style.display="block";
    else if(place==="Rabale")
        document.getElementById("RabaleInvite").style.display="block";
    else if(place==="Dadar")
        document.getElementById("DadarInvite").style.display="block";
    document.getElementById("inviteContainer").style.display="none";
}
