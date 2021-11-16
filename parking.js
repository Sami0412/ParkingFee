function solution(E, L) {
    let entranceFee = 2
    let firstHour = 3

    let startTimeArray = E.split(':')
    let endTimeArray = L.split(':')
    let hours = Number(endTimeArray[0]) - Number(startTimeArray[0])
    if(hours < 1) {
        return entranceFee + firstHour
    } else if(endTimeArray[1] - startTimeArray[1] < 0) {
        hours--
    } else if(endTimeArray[1] - startTimeArray[1] > 0) {
        hours++
    }

    let remainingHours = hours - 1
    let hourlyFee = 4

    return entranceFee + firstHour + (remainingHours * hourlyFee)
}

console.log(solution("21:53", "22:48"))