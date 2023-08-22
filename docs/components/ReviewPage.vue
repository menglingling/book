<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>立项日期</th>
          <th>项目名称</th>
          <th>回顾1</th>
          <th>回顾2</th>
          <th>回顾3</th>
          <th>回顾4</th>
          <th>回顾5</th>
          <th>回顾6</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in reviewData" :key="index">
          <td>{{ item.date }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.time1 }}</td>
          <td>{{ item.time2 }}</td>
          <td>{{ item.time3 }}</td>
          <td>{{ item.time4 }}</td>
          <td>{{ item.time5 }}</td>
          <td>{{ item.time6 }}</td>
        </tr>
      </tbody>
    </table>

    <form class="form" @submit="submitForm">
      <div class="form-item">
        <label for="email">立项日期: </label>
        <input
          class="input"
          type="date"
          id="date"
          v-model="formData.date"
          placeholder="输入立项日期"
          required
        />
      </div>
      <div class="form-item">
        <label for="name">项目名称: </label>
        <input
          class="input name"
          type="text"
          id="name"
          v-model="formData.name"
          placeholder="输入项目名称"
          required
        />
      </div>
      <button class="button" type="submit">提交</button>
    </form>
  </div>
</template>
<style scoped>
table {
  width: 1200px;
}
td {
  font-size: 16px;
  color: #000;
}
.form {
}

.form-item {
  padding: 10px;
}

.input {
  padding: 4px;
  border: 1px solid #000;
}
.input.name {
  width: 300px;
}
.button {
  display: block;
  margin-top: 20px;
  margin-left: 80px;
  padding: 4px 10px;
  width: 100px;
  background-color: #2aa777;
  border-radius: 4px;
  color: #fff;
}
</style>

<script>
export default {
  name: "ReviewPage",
  mounted() {
    //加载回顾数据
    this.loadData();
    //初始化默认数据
    const currentDate = new Date();
    // 设置默认值为当前日期
    this.formData.date = this.formartDate(currentDate);
  },
  data() {
    return {
      reviewData: null,
      formData: {
        date: new Date(),
        name: "",
      },
    };
  },
  methods: {
    formartDate(currentDate) {
      currentDate = new Date(currentDate);
      const year = currentDate.getFullYear();
      let month = currentDate.getMonth() + 1;
      let day = currentDate.getDate();

      // 格式化月份和日期为两位数
      if (month < 10) {
        month = "0" + month;
      }
      if (day < 10) {
        day = "0" + day;
      }
      return `${year}-${month}-${day}`;
    },
    submitForm(event) {
      event.preventDefault();
      // 在这里可以处理表单提交的逻辑，比如调用API发送数据等
      this.saveData();
    },

    combinedSingleData(singleData) {
      //合并单条新数据
      const currentDate = new Date(singleData.date);
      const appendData = {
        time1: this.formartDate(currentDate.setDate(currentDate.getDate() + 1)),
        time2: this.formartDate(currentDate.setDate(currentDate.getDate() + 7)),
        time3: this.formartDate(
          currentDate.setDate(currentDate.getDate() + 30)
        ),
        time4: this.formartDate(
          currentDate.setDate(currentDate.getDate() + 90)
        ),
        time5: this.formartDate(
          currentDate.setDate(currentDate.getDate() + 180)
        ),
        time6: this.formartDate(
          currentDate.setDate(currentDate.getDate() + 360)
        ),
      };

      const newSingleData = [{ ...singleData, ...appendData }];
      return newSingleData;
    },

    saveData() {
      //合并单条新数据
      const newSingleData = this.combinedSingleData(this.formData);
      if (!this.reviewData) {
        //库里无数据，
        const jsonString = JSON.stringify(newSingleData, null, 2);
        localStorage.setItem("reviewData", jsonString);
        console.log("Data saved.");
      } else {
        //合并所有数据
        const existingData = JSON.parse(localStorage.getItem("reviewData"));

        const newData = [...existingData, ...newSingleData];

        const jsonString = JSON.stringify(newData, null, 2);
        localStorage.setItem("reviewData", jsonString);
        console.log("Data saved.");
      }
    },

    loadData() {
      const jsonString = localStorage.getItem("reviewData");
      if (jsonString) {
        this.reviewData = JSON.parse(jsonString);
        console.log("Data loaded.");
      } else {
        console.log("No data found.");
      }
    },
  },
};
</script>
