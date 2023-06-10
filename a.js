class Clock{
    constructor(){
        this.timer
        this.hours=0
        this.minutes=0
        this.seconds=0
        this.ClockElement=document.createElement('span')
        this.ClockElement.innerHTML=`00:00:00`
        this.startElenment=document.createElement('button')
        this.startElenment.innerText='Start'
        this.resetElenment=document.createElement('button')
        this.resetElenment.innerText='Reset'
        this.startElenment.addEventListener('click',()=>{
            this.start()
        })
        this.pauseElenment=document.createElement('button')
        this.pauseElenment.innerText='Pause'
        this.resetElenment.addEventListener('click',()=>{
            this.reset()
        })      
          this.pauseElenment.addEventListener('click',()=>{
            this.pause()
        })
        const div=document.createElement('div')
        div.appendChild(this.ClockElement)
        div.appendChild(this.startElenment)
        div.appendChild(this.resetElenment)
        div.appendChild(this.pauseElenment)
        document.body.appendChild(div)
    }
    start(){
             clearInterval(this.timer)
             this.timer = setInterval(()=>{
            this.seconds=this.seconds+1
            if (this.seconds===60){
                this.seconds=0
                this.minutes++
            }
            let minutes=0

            if (this.minutes<10){
                minutes=`0${this.minutes}`
            }
            else minutes=this.minutes

            let seconds=0
            if (this.seconds<10){
                seconds=`0${this.seconds}`
            }
            else seconds=this.seconds

            if (this.minutes===60){
                this.minutes=0
                this.hours++
            }
            let hours=0
            if(this.hours<10){
                hours=`0${this.hours}`
            }



            this.ClockElement.innerText=`${hours}:${minutes}:${seconds}`
        },1000)
    }
    reset() {
       
        clearInterval(this.timer)
        this.minutes=0
        this.hours=0
        this.seconds=0
        this.ClockElement.innerText='00:00:00'
    }
    pause(){
        clearInterval(this.timer)
    }
}
const clock1=new Clock()


