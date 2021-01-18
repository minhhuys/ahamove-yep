<template>
  <div class="news">
    <div class="main-layout">
      <p>Tin tức chương trình Year-end Party</p>
      <div class="news--layout">
        <div class="new" v-for="(test, index) in 3" :key="index">
          <div class="new--image">
            <img src="../assets/placeholder-img.png" alt="" />
          </div>
          <div class="new--title">
            Tin tức Year-end Party
          </div>
          <div class="new--description line-clamp">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            voluptatibus quasi? Temporibus nostrum dicta quibusdam nobis veniam
            autem hic obcaecati sint, facere tempore a possimus rerum
            praesentium exercitationem quasi vel.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
  }
  .news--layout {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 25px;
    text-align: justify;

    .new--title {
      font-weight: 600;
      margin: 16px 0;
      padding: 0 16px;
    }

    .new--description {
      color: #5f5f62;
      padding: 0 16px;
      margin-bottom: 16px;
    }

    .new--image {
      img {
        width: 100%;
      }
    }

    .line-clamp {
      display: -webkit-box;
      -webkit-line-clamp: 5;
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
