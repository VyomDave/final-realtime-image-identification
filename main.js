function preload(){

}

function setup(){
  canvas = createCanvas(400 , 350)
  canvas.center()
  video = createCapture(VIDEO)
  video.hide()

  classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2t_MVJh7Q/model.json",modeloaded)
  
}

function draw(){
  image(video,0,0,400,350)
  classifier.classify(video , getresults)
}

function modeloaded(){
  console.log("done!")
}

function getresults(error , result){
  if(error){
    console.log(error)
  }
  else{
    console.log(result)
    accuracy = result[0].confidence.toFixed(3)*100
    object = result[0].label 
    document.getElementById("accuracy-result").innerHTML=accuracy+" %"
    document.getElementById("object-result").innerHTML=object
  }
}