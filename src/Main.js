/**
 * Created by Rychou on 2018/4/19.
 */
import React, { Component } from 'react'
import $ from 'jquery'
import url from './audio/wml_c.wav' // 引入背景音乐文件


class Main extends Component {
    state = {
        date: {},
    }
    componentDidMount() {
        this.print();
        setInterval(() => {
            this.time(1999, 7, 6) // 你们的纪念日
        }, 1000
        )
        var audio = document.getElementById("audio");
        setTimeout(() => audio.play(), 5570) // 背景音乐在页面加载后，延迟播放的时长，单位：毫秒。
    }
    print = () => {
        $.fn.autotype = function () {
            var _this = $(this);
            var str = _this.html();
            // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
            str = str.replace(/(\s){2,}/g, "$1");
            var index = 0;
            $(this).html('');
            var timer = function fn() {
                var args = arguments;
                var current = str.slice(index, index + 1);
                // html标签完整输出,如：<p>
                if (current == '<') {
                    index = str.indexOf('>', index) + 1;
                }
                else {
                    index++;
                }
                //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
                if (index < str.length - 1) { //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
                    _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                } else {
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                };
                setTimeout(fn, 200)
            };
            // 延迟1s开始
            setTimeout(timer, 1000);
        };
        $("#autotype").autotype();
    }
    time = (year, month, day) => {
        var dateNow = new Date();
        var dateJNR = new Date(year, month - 1, day);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
        var d = parseInt((dateNow - dateJNR) / (24 * 3600 * 1000));
        var hour = parseInt(((dateNow - dateJNR) / (3600 * 1000)) % 24);
        var minute = parseInt((dateNow - dateJNR) / (1000 * 60) % 60);
        var second = parseInt((dateNow - dateJNR) / 1000 % 60);
        this.setState({ date: { d: d, hour: hour, minute: minute, second: second } });
    };
    render() {
        const date = () => {
            if (this.state.date.d !== undefined) {
                const { d, hour, minute, second } = this.state.date
                return (<p>陈琪琪已经光临地球: <span className="date-text">{d}</span> 天 <span className="date-text">{hour}</span> 小时 <span className="date-text">{minute}</span> 分 <span className="date-text">{second}</span> 秒啦！ </p>
                )
            }
        }
        return (
            <div className="App animated bounceInLeft">
                <div className="date">{date()}</div>
                <div id="autotype">
                    <h1 style={{ fontWeight: 900 }}>Hi! 陈琪琪，生日快乐哦!</h1>
					
					<p>还记得这首歌嘛？</p>
                    <p >滑雪时候你哼的我还问你歌名的那首歌吧（你忘了你就寄了）</p>
					<p>ok吧，算你答对啦吧！是郭顶的《我们俩》！那一阵子我听听这首歌噻，我还以为你是不是监听我了</p>
					<p>此时此刻的我好难受啊  喉咙好痛  鼻子好塞 还被我卫生纸擦破了 这时候好希望你关心关心我呀  还有一堆考试要考 一堆事情要去做  好想逃得远远的啊</p>
					<p>虽然但是  我觉得还是要为我的琪琪子做点什么吧  刚好最近在用react做app  那就现学现用一下吧～</p>
					<p>现在我就是在听着这首歌 学了几天  然后录制下来了小阳人的声音给你听  我很不喜欢用自己的声音当BGM  因为不管怎么听总是觉得很不满意  很难听  但是我寻思着用我的声音给你写这封信也蛮有意义的哈！  特别是这个考试季经历了这么多噻</p>
					<p>我们俩在一起总是伴随着很多BGM哦，现在回想起来第一次见你，好像《遇见你的时候所有星星都落到我头上》</p>
					<p>你出现在我身边像个小精灵哦，虽然我一开始却并没有想过会爱上你  我只觉得跟你在一起好开心  觉得你很适合做朋友吧  但慢慢就发现不对了喔  你不理我我会经常想你在干嘛  空闲下来就想去找你  你和别人一起玩我也会很想跟你一起</p>
					<p>想和你去很多很多地方  想每天都跟你腻在一起   第一次去迪士尼  第一次拍照  第一次在异国他乡病倒手术  还有好多好多的第一次吧  而且  还好这些都有你陪伴我吧</p>
					<p>虽然我总惹你生气  但还是希望你不管怎么样都要跟我讲吧  不想你不开心了吧  也不要突然说我了吧  我会不知所措</p>
					<p>好难受啊！  考试季快过去吧  我想和你一起开车兜风  想和你去维也纳听泛黄的歌剧  想和你去冰岛看世界尽头的景色  想和你一起去西班牙感受开放的热情  还有好多好多想和你一起去的地方</p>
                    <p>最后祝陈琪琪子生日快乐哦！愿你的23岁依然充满活力，依然好运，依然快乐，依然身体健康，依然爱我！</p>
                    <div style={{ textAlign: 'right' }}>
                        <p>♥你的严严子吧</p>
                        <p>2022年07月06日</p>
                    </div>
                </div>
                <audio id="audio" src={url}></audio>
            </div>

        )
    }
}
export default Main