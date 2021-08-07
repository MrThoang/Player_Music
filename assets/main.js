const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const PLAYER_STORE_KEY = 'F8_PLAYER'

// Get Element
const player = $('.player')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const cd = $('.cd')
const playBtn = $('.btn-toggle-play')
const progress = $('#progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playlist = $('.playlist')
var count = 0
var arrayTemp = [];


const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORE_KEY)) || {},
    songs: [
         {
            name: 'Chẳng Thể Tìm Được Em',
            singer: 'PhucXp ft. Freak D',
            path: './assets/Music/ChẳngThểTìmĐượcEm.mp3',
            image: 'https://i.ytimg.com/vi/mKxzJzp6oes/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDXNGqDdI9lwOw3Zf37XIKj88DF-Q'
            
        },
        {
            name: 'Thê Lương lofi',
            singer: 'Phúc Chinh',
            path: './assets/Music/Thê Lương.mp3',
            image: 'https://i.ytimg.com/vi/P5obx0XMo-E/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBZ_AiCEN3uVBKyFsIz4ZiKOVyt2w'
            
        },
        {
            name: 'Tháng Năm lofi',
            singer: 'Soobin x FreakD',
            path: './assets/Music/Tháng Năm Lofi Ver Soobin x Freak D.mp3',
            image: 'https://i.ytimg.com/vi/9T026UKcizA/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAhXS-cY-d0asYTctvQFJdTjp7ODw'
            
        },
        {
            name: '3107-3',
            singer: 'Wn x Nâu x Duongg x Titie',
            path: './assets/Music/31073 Wn x Nâu x Duongg x Titie.mp3',
            image: 'https://i.ytimg.com/vi/kfw7MYah2n0/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBtkDKwsPHYzMFBbhDNGdd8erEjHw'
            
        },
        {
            name: 'Bông Hoa Chẳng Thuộc Về Ta',
            singer: 'Như Việt',
            path: './assets/Music/BôngHoaChẳngThuộcVềTa.mp3',
            image: 'https://i.ytimg.com/vi/JgggA8Jtzyg/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLAimVKbjoeZSq7r0PRU7GvQyBrOiQ'
            
        },
        {
            name: 'Tay To',
            singer: 'RPT MCK',
            path: './assets/Music/Tay To  RPT MCK x RPT.mp3',
            image: 'https://i.ytimg.com/vi/cKBRHaPdjbc/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDrLpwyG4833d9ihEzCvziW0elhSA'
            
        },
        {
            name: 'Hoàn Hảo',
            singer: 'Bray',
            path: './assets/Music/HoanHao.mp3',
            image: 'https://i.ytimg.com/vi/7j-V54Y1J-g/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBCPabemHTw5e6OXN7s-Z_1JS9UzA'
            
        },
        {
            name: 'Trốn Tìm',
            singer: 'Đen',
            path: './assets/Music/Đen - Trốn Tìm.mp3',
            image: 'https://i.ytimg.com/vi/Ws-QlpSltr8/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLD4CgcJCV_3TmVVjr37Dz-jUtFCwg'
            
        },
        {
            name: 'Dù Cho Mai Về Sau',
            singer: 'Buitruonglinh',
            path: './assets/Music/Dù Cho Mai Về Sau - buitruonglinh.mp3',
            image: 'https://i.ytimg.com/vi/SGlBQR-ftVI/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDOWQnc4eXj7cHx829Tu_lc9etu8w'
            
        },
        {
            name: 'Let Me Down Slowly',
            singer: 'Alec Benjamin',
            path: './assets/Music/Let Me Down Slowly.mp3',
            image: 'https://i.ytimg.com/vi/50VNCymT-Cs/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBsEJ6icDUy-eTLjknFMs_g1Qu_8A'
            
        },
        {
            name: 'SUY',
            singer: 'Nger',
            path: './assets/Music/Nger  SUY   Official Lyric Video.mp3',
            image: 'https://i.ytimg.com/vi/q3HSr-Hfbag/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAVfn5zbPjjbkfrlcR_aMU3S25vDg'
            
        },
        {
            name: 'At My Worst',
            singer: 'Pink Sweat',
            path: './assets/Music/Pink Sweat - At My Worst Lyrics.mp3',
            image: 'https://i.ytimg.com/vi/LKbzXBEU-lg/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCCx17SaKmqH3NWDSTjIttnfOlKXA'
            
        },
        {
            name: 'Say Em',
            singer: 'QNT ft Refund',
            path: './assets/Music/SAY EM  QNT ft REFUND BAND  Official Music Video.mp3',
            image: 'https://i.ytimg.com/vi/u-7Y8hqgb30/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCmazIffex0wI0Zl-jDtn2PgTVkRA'
            
        },
         {
            name: 'So Far Away',
            singer: 'Martin Garrix & David Guetta',
            path: './assets/Music/So Far Away Acoustic.mp3',
            image: 'https://i.ytimg.com/vi/hiRqIZcVkv4/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLC1nfZeIHLaY1S3x8CaGzqfLizkkA'
            
        },
         {
            name: 'Thanh Xuân',
            singer: 'Da LAB',
            path: './assets/Music/Thanh Xuân - Da LAB.mp3',
            image: 'https://i.ytimg.com/vi/GgQFO8dL5XQ/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDRjMN_hnDHjQe-MND_08VvJiv9cQ'
            
        },
         {
            name: 'TỘC CA',
            singer: 'PHÚC DU x SONBEAT',
            path: './assets/Music/TỘC CA - PHÚC DU x SONBEAT.mp3',
            image: 'https://i.ytimg.com/vi/HOGfrOK9a84/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLC2hEgAAQnAK9-vSN_pZUsrDOExiQ'
            
        },
         {
            name: 'Thích em hơi nhiều',
            singer: 'WREN EVANS',
            path: './assets/Music/WREN EVANS - THÍCH EM HƠI NHIỀU.mp3',
            image: 'https://i.ytimg.com/vi/faSVTByG0LQ/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAxkLbBWyyr2MEKMtCn7O787Qq51w'
            
        },
    ],

    setConfig: function(key, value) {
        this.config [key] = value;
        localStorage.setItem(PLAYER_STORE_KEY, JSON.stringify(this.config)); // Lưu 2 nút random và repaet
    },
    render: function() {
        const html = this.songs.map((song, index) => {
            return `
                <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index=${index}>
                    <div class="thumb" style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `
        })
        playlist.innerHTML = html.join('')
    },

    definePropertes: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        }) 
    },

    handleEvents: function() {
        const _this = this
        const cdWidth = cd.offsetWidth


        // Xử lý CD quay / dừng 
        const cdThumbAnimate = cdThumb.animate([ // Sreach gg amination Web Api
             {transform: 'rotate(360deg)'}
        ], {
            duration: 10000, // second
            iterations: Infinity
        })
        cdThumbAnimate.pause()

        // Xử lý phóng to / thu nhỏ CD
        document.onscroll = function() {
            const scrollTop = document.documentElement.scrollTop || window.scrollY
            const newCdwidth  = cdWidth - scrollTop

            cd.style.width = newCdwidth > 0 ? newCdwidth + 'px' : 0 
            cd.style.opacity = newCdwidth / cdWidth
        }


        // Xử lý khi click play 
        playBtn.onclick = function() {
            if( _this.isPlaying){
                audio.pause();
            }
            else {
                audio.play()
            }
        }
        // Khi song được play
        audio.onplay = function() {
            _this.isPlaying = true
            player.classList.add('playing')
           cdThumbAnimate.play()
        }
          // Khi song bị pause
        audio.onpause = function() {
            _this.isPlaying = false
            player.classList.remove('playing')
           cdThumbAnimate.pause()
        }
        // Khi tiên độ bài hát thay đổi
        // audio.ontimeupdate = function() {
        //     if (audio.duration) {
        //         const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
        //         progress.value = progressPercent 
        //     }
        // }

        // // Xử lý khi tua bài hát 
        // progress.oninput = function(e) {
        //    const seekTime = (audio.duration * e.target.value) / 100 // chia thời gian ra số dây
        //    audio.currentTime = seekTime 
        // }
        progress.ontouchstart = function() { // Khi kéo thì bài hát vẫn chạy
            audio.ontimeupdate = function(){}
        }

        progress.ontouchend = function(e) { // khi thả ra bài hát mới chuyển qua vị trí thả .
            const seekTime = (e.target.value * audio.duration) / 100
            audio.currentTime = seekTime
            audio.ontimeupdate = function() {
                if(audio.duration) {
                    const progressPercent = (audio.currentTime / audio.duration) * 100
                    progress.value = progressPercent
                }
            }
        }

        // Khi next bài hát 
        nextBtn.onclick = function() {
            if(_this.isRandom){
                _this.playRandomSong()
            } else {    
                _this.nextSong()
            }
                audio.play()
                _this.render() // active line color song.
                _this.scrollToActiveSong()
        }
        // Khi prev bài hát
        prevBtn.onclick = function() {
             if(_this.isRandom){
                _this.playRandomSong()
            } else {    
                 _this.prevSong()
            }
                audio.play()
                _this.render() // active line color song.
                _this.scrollToActiveSong()
        }

        // Khi random bài hát
        randomBtn.onclick = function(e) {
            _this.isRandom = !_this.isRandom // tự đảo ngược
            _this.setConfig('isRandom', _this.isRandom)
            randomBtn.classList.toggle('active', _this.isRandom) // dùng toggle: true thì add / false thì remove
        }

        // Xử lý lặp lại 1 bài
        repeatBtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat
            _this.setConfig('isRepeat', _this.isRepeat)
            repeatBtn.classList.toggle('active', _this.isRepeat)
        }

        // Xử lý nextsong khi audio ended 
        audio.onended = function() {
            if(_this.isRepeat) {
                audio.play()
            } else { 
                nextBtn.click()}  // khi dùng như này nó tự bấm next
        }

        // Lắng nghe hành vi click vào playlist
        playlist.onclick = function(e) {
            const songNode = e.target.closest('.song:not(.active)')

            if (songNode || e.target.closest('.option')
            ) {
                // Xử lý khi click vào bài hát
                if (songNode) {
                    _this.currentIndex = Number(songNode.dataset.index)
                    _this.loadCurrentSong()
                    _this.render()
                    audio.play()
                }

                // Xử lý khi click vào option 
                if (e.target.closest('.option')) {

                }
            }
        }

    },
    
    loadCurrentSong: function() { 
        heading.textContent = this.currentSong.name + ' - ' + this.currentSong.singer
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },
    
    loadConfig: function() {
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat
    },

    nextSong: function() {
        this.currentIndex++ 
        if(this.currentIndex >= this.songs.length){
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prevSong: function() {
        this.currentIndex--
        if(this.currentIndex < 0){
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },

    playRandomSong: function(){
        // let newIndex 
        // do{
        //    newIndex = Math.floor(Math.random() * this.songs.length)
        // } while (newIndex === this.currentIndex)
        // this.currentIndex = newIndex
        // this.loadCurrentSong()
         let newIndex;
                newIndex = Math.floor(Math.random() * this.songs.length);
                
                if(count >0) {
                    do {
                        newIndex = Math.floor(Math.random() * this.songs.length);
                        var isCheck= arrayTemp.includes(newIndex);
                    }
                    while(isCheck == true)
                }
                // Test
                //console.log(count,newIndex);
                //console.log(arrayTemp);

                arrayTemp[count]=newIndex;

                this.currentIndex = newIndex;
                this.loadCurrentSong();
                if(count == this.songs.length-1)
                {
                    arrayTemp=[];
                    count=-1;
                }
                count++;
                // Biến count với biến arrayTemp mình khởi tạo bên trên app
                // var count =0;
                // var arrayTemp = [];
                
    },

    scrollToActiveSong: function() {

        setTimeout(function() {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'end'
            })
            //  if (this.currentIndex <= 2) {
            // $('.song.active').scrollIntoView({
            //     behavior: 'smooth',
            //     block: 'end',
            // });
            // } else {
            // $('.song.active').scrollIntoView({
            //     behavior: 'smooth',
            //     block: 'center',
            // });
            //  }
        },300)
    },  

    start: function() {
        // Gán cấu hình config vào app
        this.loadConfig()

        // Định nghĩa các thuộc tính cho Object
        this.definePropertes()

        // Lắng nghe / xử lý các sự kiện trong DOM
        this.handleEvents()

        // Tải thông tin bài hát đầu tiên vào UI khi chạy app
        this.loadCurrentSong()

        // Render playlist
        this.render()

        // Hiển thị trạng thái ban đầu của repeat và random
        repeatBtn.classList.toggle('active', this.isRepeat)
        randomBtn.classList.toggle('active', this.isRandom)
    }
}

app.start()
