// 绘制map

var $ = (className) => document.querySelector(className)
const rowNum = 25;//总行数
const colNum = 20;//总列数
const mapWidth = colNum * 20 + 'px'
const mapHeight = colNum * 20 + 'px'

let map = $('#map')
map.style.width = mapWidth
map.style.height = mapHeight

// 创造一个数组来记录地图上的所有坐标位置
var locationArr = []
// 外层循环行，里层循环列
!function(){
    for(let i=0;i<rowNum;i++){
        let rowDiv = document.createElement('div')
        rowDiv.className = 'row'
        map.appendChild(rowDiv)
        var rowArr = []//行级数组
        for(let j=0;j<colNum;j++){
            let colDiv = document.createElement('div')
            colDiv.className = 'col'
            // 将块添加到当前行
            rowDiv.appendChild(colDiv)
            // 将块添加到当前行数组
            rowArr.push(colDiv)
        }
        // 内循环结束，将行数组添加到位置数组
        locationArr.push(rowArr)
    }
}()

var snake = []
!function(){
    for(let i=0;i<3;i++){
        // 在第一行画出三个单元格表示小青蛇
        locationArr[0][i].className = 'col snakeColor'
        // 存储在蛇身数组
        snake[i] = locationArr[0][i]
    }
}()

var eggX = 0 //蛋的起始位置，对应位置数组的下标
var eggY = 0 //蛋的起始位置，对应位置数组的下标

createNewEgg()//在游戏开始的时候生成新的蛋

function random(min,max){
    return Math.floor(Math.random() * (max - min)) + min
}
function createNewEgg(){
    eggX = random(0,colNum - 1)
    eggY = random(0,rowNum - 1)
    
    // 如果生成的坐标跟蛇身的位置重合，那就重新生成一个新的蛋
    if(locationArr[eggY][eggX].className == 'col snakeColor'){
        createNewEgg() //重新随机造新的蛋
        console.log(eggX,eggY)
    }else{
        locationArr[eggY][eggX].className = 'col egg' //造蛋
    }
}

var x = 2 //蛇头位置
var y = 0 //蛇头位置，综合起来就表示为locationArr[y][x] 或者locationArr[0][2]
var scoreCount = 0 //积分，吃了多少蛋
var direction = 'right' //记录蛇移动的方向，初始方向为右
var changeDir = true
var delayTimer = null
var score = $('#score')

//添加键盘响应事件监听方向键来改变蛇的移动方向

document.onkeydown = function(e){
    e = event || window.event

    // 先判断是否需要改变方向，true表示需要，false表示不需要
    if(!changeDir){
        return;
    }
    switch(e.keyCode){
        case 37:
            direction = 'left';
            break;
        case 38:
            direction = 'up';
            break;
        case 39:
            direction = 'right';
            break;
        case 40:
            direction = 'down';
            break;
    }

    // 为了合理处理蛇的移动，需要判断蛇头和蛇身
    // 假设蛇向右移动，点方向键左，右键都不需做出任何响应
    if(direction == 'right' && e.keycode == 37){
        return;//终止事件执行
    }
    if(direction == 'left' && e.keycode == 39){
        return;//终止事件执行
    }
    if(direction == 'up' && e.keycode == 40){
        return;//终止事件执行
    }
    if(direction == 'down' && e.keycode == 38){
        return;//终止事件执行
    }

    changeDir = false
    // 300ms之后需要改变方向的动作
    dalayTimer = setTimeout(function(){
        // 设置是否需要改变方向
        changeDir = true
    },300)
}

var moveTimer = setInterval(function(){
        snakeMove()
},300)

function snakeMove(){
    switch(direction){
        case 'left':
            x--;
            break;
        case 'right':
            x++;
            break;
        case 'up':
            y--;
            break;
        case 'down':
            y++;
            break;
    }

    // 判断游戏是否结束，触到边界的情况
    if(x < 0 || y < 0 || x >= colNum || y >= rowNum){
        alert('game over')
        clearInterval(moveTimer)
        return;
    }

    // 蛇吃到自己
    for(var i=0;i<snake.length;i++){
        if(snake[i] == locationArr[y][x]){
            alert('game over')
            clearInterval(moveTimer)
            return;
        }
    }

    if(eggX == x && eggY == y){
        locationArr[eggY][eggX].className = 'col snakeColor'
        snake.push(locationArr[eggY][eggX])//数组添加一个元素，表示加长蛇身
        scoreCount++
        // 更新分数
        score.innerHTML = scoreCount
        // 此时创造一个新蛋
        createNewEgg()
    }else{
        // 蛇的移动
        // 需要不断的去掉蛇尾，绘制新的青色单元格，看起来就是不断移动了
        snake[0].className = 'col'
        snake.shift()
        locationArr[y][x].className = 'col snakeColor' //绘制新的青色单元格
        snake.push(locationArr[y][x]) //将单元格移入snake数组
    }
}

var pause = $('#pause')
var start = $('#start')

pause.onclick = function(){
    clearInterval(moveTimer)
}
start.onclick = function(){
    clearInterval(moveTimer)
    moveTimer = setInterval(function(){
        snakeMove()
    },300)
}