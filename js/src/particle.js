
    <script type="text/javascript">
        <canvas id="mycanvas" width="1000" height="600"></canvas>
        var mycanvas = document.getElementById("mycanvas");
        var ctx = mycanvas.getContext("2d");
        //圆形类
         function Circle(x,y,r,color){
            this.x = x;
            this.y = y;
            this.r = r;
            // 颜色的取值范围
            this.color = "rgb("+ (parseInt(Math.random() * 240 ) + 9) + ","+ (parseInt(Math.random() * 220 )+18) +",203)";
            //随机方向
            this.dx = Math.random() * 12 - 7;
            this.dy = Math.random() * 12 - 7;
            //往数组中push自己
            circleArr.push(this);
         }
         //渲染
         Circle.prototype.render = function(){
            //新建一条路径
            ctx.beginPath();
            //创建一个圆
            ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, true);
            //设置样式颜色
            ctx.fillStyle = this.color;
            //通过填充路径的内容区域生成实心的图形
            ctx.fill();
         }
         //更新
         Circle.prototype.update = function(){
            this.x += this.dx;
            this.y += this.dy;
            this.r--;
            if(this.r < 0){
                for (var i = 0; i < circleArr.length; i++) {
                    if (circleArr[i] === this) {
                        circleArr.splice(i,1);
                    };
                }
                return false;
            }
            return true;
         }
         //创建一个数组
         var circleArr = [];
         //鼠标移动事件
         mycanvas.onmousemove = function(event){
            new Circle(event.clientX,event.clientY,30,"orange");
         }
         //设置定时器每20毫秒更新和渲染
         setInterval(function(){
            ctx.clearRect(0, 0, 1000, 600)
            for (var i = 0; i < circleArr.length; i++) {
                circleArr[i].update() && circleArr[i].render();
            };
         },20);
    </script>




// ! function() {
//     function n(n, e, t) { return n.getAttribute(e) || t }

//     function e(n) { return document.getElementsByTagName(n) }

//     function t() { i = a.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, c = a.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight }

//     function o() { d.clearRect(0, 0, i, c); var n, e, t, a, m, r, y = [x].concat(w);
//         w.forEach(function(o) { for (o.x += o.xa, o.y += o.ya, o.xa *= o.x > i || o.x < 0 ? -1 : 1, o.ya *= o.y > c || o.y < 0 ? -1 : 1, d.fillRect(o.x - .5, o.y - .5, 1, 1), e = 0; e < y.length; e++) n = y[e], o !== n && null !== n.x && null !== n.y && (a = o.x - n.x, m = o.y - n.y, r = a * a + m * m, r < n.max && (n === x && r >= n.max / 2 && (o.x -= .03 * a, o.y -= .03 * m), t = (n.max - r) / n.max, d.beginPath(), d.lineWidth = t / 2, d.strokeStyle = "rgba(" + u.c + "," + (t + .2) + ")", d.moveTo(o.x, o.y), d.lineTo(n.x, n.y), d.stroke()));
//             y.splice(y.indexOf(o), 1) }), l(o) } var i, c, a = document.createElement("canvas"),
//         u = function() { var t = e("script"),
//                 o = t.length,
//                 i = t[o - 1]; return { l: o, z: n(i, "zIndex", -1), o: n(i, "opacity", .5), c: n(i, "color", "0,0,0"), n: n(i, "count", 99) } }(),
//         m = "c_n" + u.l,
//         d = a.getContext("2d"),
//         l = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(n) { window.setTimeout(n, 1e3 / 45) },
//         r = Math.random,
//         x = { x: null, y: null, max: 2e4 };
//     a.id = m, a.style.cssText = "position:fixed;top:0;left:0;z-index:" + u.z + ";opacity:" + u.o, e("body")[0].appendChild(a), t(), window.onresize = t, window.onmousemove = function(n) { n = n || window.event, x.x = n.clientX, x.y = n.clientY }, window.onmouseout = function() { x.x = null, x.y = null }; for (var w = [], y = 0; u.n > y; y++) { var s = r() * i,
//             f = r() * c,
//             h = 2 * r() - 1,
//             g = 2 * r() - 1;
//         w.push({ x: s, y: f, xa: h, ya: g, max: 6e3 }) } setTimeout(function() { o() }, 100) }();