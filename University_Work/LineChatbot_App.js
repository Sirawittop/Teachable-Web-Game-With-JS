function myFunction() {
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Inputdata')
  var names = ss.getRange(1, 2,1,ss.getLastColumn()).getValues()[0]
  var check = ss.getRange(ss.getLastRow(), 1,1,ss.getLastColumn()).getValues()[0]
  var date = Utilities.formatDate(new Date(), 'GMT+7', 'dd/MM/yyyy')
  var data2 = date.split(" ")
  var msg = "\n"+check
  var msg2 = check.toString()
  var msg3 = msg2.split(",")
  var datedate = msg3[2].split(" ")
  var inputdatee = msg3[0].split(" ")
  var datedate = msg3[2].split(" ")
  convertmount(datedate)
  convertmounttwo(inputdatee)
  var datedatedate = datedate[2] +"/"+datedate[1] +"/"+ datedate[3] +" เวลา "+ datedate[4] 
  var inputdatedate = inputdatee[2] +"/"+inputdatee[1]+"/" +inputdatee[3] + " เวลา "+inputdatee[4] 
  var convertdayinput = parseInt(datedate[2]) + (parseInt(datedate[1])*koonmount1) + (parseInt(datedate[3])*365)
  var convertdaydeadline = parseInt(inputdatee[2]) + (parseInt(inputdatee[1])*koonmount2) + (parseInt(inputdatee[3])*365)
  var timeleft =  convertdayinput - convertdaydeadline

var output = ("เวลา : "+inputdatedate +"\n"+"โน้ต : "+msg3[1]+"\n"+msg3[3]+"\n"+msg3[4]+"\nประเภท : "+msg3[5]+"\nวันที่สิ้นสุด : "+datedatedate+"\nเหลือเวลาอีก : "+timeleft+" วัน")
console.log(output)
sendNotify(output) 
}  
var token ="esiQj6T3LB2MhwWrnzdFvRzxWEMg80uGnHxb3P7cFsr"//โทเคน
function sendNotify(msg){
let payloadJson = {
       "message": msg

    };
    let options = {
        "method": "post",
        "payload": payloadJson,
        "headers": {
            "Authorization": "Bearer " + token
        }
    };
    UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}

function convertmount(datedate){
   if(datedate[1] == "Jan"){
    datedate[1] = "1"
    koonmount1 = 31
  }else if(datedate[1] == "Feb"){
    datedate[1] = "2"
    koonmount1 = 28
  }else if(datedate[1] == "Mar"){
    datedate[1] = "3"
    koonmount1 = 31
  }else if(datedate[1] == "Apr"){
    datedate[1] = "4"
    koonmount1 = 30
  }else if(datedate[1] == "May"){ 
    datedate[1] = "5"
    koonmount1 = 31
  }else if(datedate[1] == "Jun"){
    datedate[1] = "6"
    koonmount1 = 30
  }else if(datedate[1] == "Jul"){
    datedate[1] = "7"
    koonmount1 = 31
  }else if(datedate[1] == "Aug"){
    datedate[1] = "8"
    koonmount1 = 31
  }else if(datedate[1] == "Sep"){
    datedate[1] = "9"
    koonmount1 = 30
  }else if(datedate[1] == "Oct"){
    datedate[1] = "10"
    koonmount1 = 31
  }else if(datedate[1] == "Nov"){
    datedate[1] = "11"
    koonmount1 = 30
  }else if(datedate[1] == "Dec"){
    datedate[1] = "12"
    koonmount1 = 31
  }
}
function convertmounttwo(inputdatee){
   if(inputdatee[1] == "Jan"){
    inputdatee[1] = "1"
    koonmount2 = 31
  }else if(inputdatee[1] == "Feb"){
    inputdatee[1] = "2"
    koonmount2 = 28
  }else if(inputdatee[1] == "Mar"){
    inputdatee[1] = "3"
    koonmount2 = 31
  }else if(inputdatee[1] == "Apr"){
    inputdatee[1] = "4"
    koonmount2 = 30
  }else if(inputdatee[1] == "May"){
    inputdatee[1] = "5"
    koonmount2 = 31
  }else if(inputdatee[1] == "Jun"){
    inputdatee[1] = "6"
    koonmount2 = 30
  }else if(inputdatee[1] == "Jul"){
    inputdatee[1] = "7"
    koonmount2 = 31
  }else if(inputdatee[1] == "Aug"){
    inputdatee[1] = "8"
    koonmount2 = 31
  }else if(inputdatee[1] == "Sep"){
    inputdatee[1] = "9"
    koonmount2 = 30
  }else if(inputdatee[1] == "Oct"){
    inputdatee[1] = "10"
    koonmount2 = 31
  }else if(inputdatee[1] == "Nov"){
    inputdatee[1] = "11"
    koonmount2 = 30
  }else if(inputdatee[1] == "Dec"){
    inputdatee[1] = "12"
    koonmount2 = 31
  }


}
