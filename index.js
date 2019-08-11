const formatDate = (timeInSeconds) => {
    
    if(timeInSeconds === undefined) {
        timeInSeconds = 0
    }
    if(timeInSeconds > 60) {
        minutes = Math.floor(timeInSeconds / 60)
        seconds = timeInSeconds - minutes * 60
        
        if(minutes > 60){
           hours = Math.floor(timeInSeconds / 3600);
           timeInSeconds = timeInSeconds - hours * 3600;
            minutes = Math.floor(timeInSeconds / 60) 
            seconds = timeInSeconds - minutes * 60

            if(minutes == 0 && seconds == 0) {
                return `${hours}h`
            }else if(seconds == 0) {
                return `${hours}h ${minutes}m`
            }else if(minutes == 0) {
                return `${hours}h ${seconds}s`
            }else{

                return `${hours}h ${minutes}m ${seconds}s`
            }
        } 
    
        if(seconds === 0){
            return `${minutes}m`
        }else{
            return `${minutes}m ${seconds}s`
        }
    }
    if(timeInSeconds < 60) {
        minutes = 0
        return `${timeInSeconds}s`
    }
    
    return `${timeInSeconds}s`


  }
  
  module.exports = formatDate;