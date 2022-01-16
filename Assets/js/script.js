const todayEL = document.getElementById("currentDay")
const today = moment().format("dddd, MMMM Do, YYYY")
console.log(today)
todayEL.textContent = today

const saveBtn1 = document.getElementById("btn1")
console.log(saveBtn1)

const saveBtn2 = document.getElementsByClassName("saveBtn")
console.log(saveBtn2)

const inputForm9 = $("#nineAm")
console.log(inputForm9)
inputForm9.on("click"       )

const inputForm10 = $("#tenAm")
console.log(inputForm10)
inputForm10.on("click"     )

const inputForm11 = $("#elevenAm")
let containerEL = $("#mycontainer");
let hrelement = '<form class="row">';



todayEL.textContent = today;
const current = new Date();

const mymoment = moment();
const getcolor = (loop) => {
    const current = moment();
    if (loop.format("hh") == current.format("hh")) {
        return "bg-danger";
    } else if (loop < current) {
        return "bg-warning";
    } else {
        return "bg-secondary";
    }
};

let start = moment(8, "hours");
const finish = moment(18, "hours");
const getbtnid = (id) => {

};
const getvalue = (value) => {
    const id = `btn-${value}`

    const back = localStorage.getItem(id)

    return back

}

for (start; start < finish; start = start.add(1, "hours")) {
    hrelement += ` <p class="time-block col-2 hour bg-info"> ${start.format(
    "hh a"
  )}</p>`;
    const mycolor = getcolor(start);
    const got = getvalue(start.format("ahh"))
    if (got) {
        myvalue = got
    } else {
        myvalue = ""
    }

    hrelement += `<input id="in-${start.format(
    "ahh"
  )}" type="text" name="one" value="${myvalue}"  class="description ${mycolor} col-8" />`;
    getbtnid(start.format("ahh"));
    hrelement += `<button id="btn-${start.format(
    "ahh"
  )}" class="btn1 bg-info col-2">Save</button>`;
}
hrelement += "<form>";

containerEL.append(hrelement);


const save = (name, value) => {
    if (name && value) {
        localStorage.setItem(name, value)
    }

}
let btn8EL = $("#btn-am08");
const input8EL = $("#in-am08");

btn8EL.on("click", (e) => {

    e.preventDefault();


    const name = "btn-am08"
    const value = input8EL.val()
    save(name, value)
});
let btn9EL = $("#btn-am09");
const input9EL = $("#in-am09");

btn9EL.on("click", (e) => {

    e.preventDefault();


    const name = "btn-am09"
    const value = input9EL.val()
    save(name, value)
});

let btn10EL = $("#btn-am10");
const input10EL = $("#in-am10");

btn10EL.on("click", (e) => {

    e.preventDefault();


    const name = "btn-am10"
    const value = input10EL.val()
    save(name, value)
});
let btn11EL = $("#btn-am11");
const input11EL = $("#in-am11");

btn11EL.on("click", (e) => {

    e.preventDefault();


    const name = "btn-am11"
    const value = input11EL.val()
    save(name, value)
});
let btn12EL = $("#btn-pm12");
const input12EL = $("#in-pm12");

btn12EL.on("click", (e) => {

    e.preventDefault();


    const name = "btn-pm12"
    const value = input12EL.val()
    save(name, value)
});





let btn01EL = $("#btn-pm01");
const input01EL = $("#in-pm01");

btn01EL.on("click", (e) => {

    e.preventDefault();


    const name = "btn-pm01"
    const value = input01EL.val()
    save(name, value)
});


let btn02EL = $("#btn-pm02");
const input02EL = $("#in-pm02");

btn02EL.on("click", (e) => {

    e.preventDefault();


    const name = "btn-pm02"
    const value = input02EL.val()
    save(name, value)
});
let btn03EL = $("#btn-pm03");
const input03EL = $("#in-pm03");

btn03EL.on("click", (e) => {

    e.preventDefault();


    const name = "btn-pm03"
    const value = input03EL.val()
    save(name, value)
});

let btn04EL = $("#btn-pm04");
const input04EL = $("#in-pm04");

btn04EL.on("click", (e) => {

    e.preventDefault();


    const name = "btn-pm04"
    const value = input04EL.val()
    save(name, value)
});

let btn05EL = $("#btn-pm05");
const input05EL = $("#in-pm05");
btn05EL.on("click", (e) => {

    e.preventDefault();


    const name = "btn-pm05"
    const value = input05EL.val()
    save(name, value)
});