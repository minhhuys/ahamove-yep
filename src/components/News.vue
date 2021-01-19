<template>
  <div class="news">
    <div class="main-layout">
      <p>Tin tức chương trình Year-end Party</p>
      <div class="news--layout">
        <div class="new" v-for="item in news" :key="item.id" @click="redirect(item.url)">
          <div class="new--image">
            <img :src="item.img" alt />
          </div>
          <div class="new--title line-clamp-1" :title="item.title">{{item.title}}</div>
          <div
            class="new--description line-clamp"
            :title="item.description"
            v-html="item.description"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [
        {
          id: 1,
          title: "SHINE YOUR LIGHT - ĐÂY LÀ LÚC TEAM BẠN TỎA SÁNG!",
          description:
            "<span>Đã đến lúc team bạn thể hiện mình</span><br /><span>Bước lên sân khấu với tinh thần chiến binh!</span><br/><span>🚀Cuộc thi “Shine your light” là cơ hội để thể hiện những màu sắc và những sức mạnh đặc biệt của team với 2 vòng thi:</span><br /><span>🎉 Vòng 1 “Shine your color”: từ ngày 11/01 - 18/01 diễn ra online trên 1Office</span><span>🎉Vòng 2 “Let’s shine together” diễn ra ngay tại chương trình Year End Party</span><span>🎖Tổng giá trị giải thưởng của Cuộc thi lên đến 22 triệu đồng!#Shineyourlight</span>",
          url: "https://ahamove.1office.vn/social/company",
          img: "https://ahamove.com/wp-content/uploads/2021/01/Pic-1.png"
        },
        {
          id: 2,
          title: "VÒNG 1: “SHINE YOUR COLOR”",
          description:
            "<span>Vòng 1 “Shine your color”: đã diễn ra vô cùng gây cấn với những tấm hình shooting xịn sò, cực chất đến từ các AhaClimbers.</span> <br /><span>Tinh thần tập thể và sự hết mình trong từng hoạt động khiến BGK khá là căng thẳng trong việc bình chọn và xếp hạng các Team để trao các suất tài trợ tương ứng.</span> <span>Hãy theo dõi và chờ đợi kết quả vòng 1 trong thời gian tới nào.Còn bây giờ cùng ngắm nhìn lại những tấm ảnh lung linh đến từ các team nhà AhaMove nhé!</span>",
          url: "https://forms.gle/FbTbFj9vQ35EYRjk9",
          img: "https://ahamove.com/wp-content/uploads/2021/01/Pic-2.png"
        },
        {
          id: 3,
          title: "VÒNG 2: “LET’S SHINE TOGTHER”",
          description: `Cuộc thi "Shine your light" nằm trong chuỗi hoạt động của sự kiện, vòng 2 với chủ đề "Let's Shine Together", các AhaClimbers hãy cùng nhau thể hiện những màu sắc và cá tính của riêng mình thông qua các tiết mục văn nghệ đến từ chính Team của các bạn. Hãy cùng chờ đón những tiết mục độc đáo và ấn tượng trong buổi tiệc hoành tráng năm nay nhé! Các team còn chần chờ gì nữa mà không nhanh tay đăng ký ngay đi nào!`,
          url:
            "https://docs.google.com/forms/d/e/1FAIpQLSen1dI-ywlA0djcXWS9IKe88-zhkAapAAAsSNig3zc9Dwrx4w/viewform",
          img: "https://ahamove.com/wp-content/uploads/2021/01/Pic-3.png"
        }
      ]
    };
  },
  methods: {
    redirect(url) {
      return window.open(url, "_blank");
    }
  }
};
</script>

<style lang="scss" scoped>
.news {
  p {
    text-align: left;
    font-size: 35px;
    font-weight: 600;
  }

  .new {
    border: 1px solid rgba(26, 26, 31, 0.1);
    cursor: pointer;
  }
  .news--layout {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 25px;
    text-align: justify;

    .new--title {
      font-weight: 600;
      margin: 16px 0;
      padding: 0 16px;
      color: #ff8200;
    }

    .new--description {
      color: #5f5f62;
      padding: 0 16px;
      margin-bottom: 16px;

      p {
        margin: 0 !important;
      }
    }

    .new--image {
      width: 100%;
      // height: 245px;
      img {
        width: inherit;
        height: auto;
        display: block;
      }
    }

    .line-clamp {
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .line-clamp-1 {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}

@media screen and (max-width: 780px) {
  .news {
    padding: 0 15px;
    .news--layout {
      grid-template-columns: auto;
    }
  }
}
</style>
