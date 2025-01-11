<template>
  <div class="book-table-container">
    <el-table :fit="true" :data="books" style="width: 100%">
      <el-table-column prop="cover" label="封面图" width="200">
        <template #default="scope">
          <img :src="scope.row.cover" alt="封面图" class="book-cover" />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="书籍名字" width="200"></el-table-column>
      <el-table-column prop="author" label="作者"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="freeNumber" label="库存量"></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button @click="handleEdit(scope.row)" type="primary" size="small">修改信息</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogVisible" title="修改书籍信息" width="30%">
      <el-form :model="editBook">
        <el-form-item label="书名">
          <el-input v-model="editBook.name"></el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="editBook.author"></el-input>
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model="editBook.price"></el-input>
        </el-form-item>
        <el-form-item label="封面">
          <img :src="editBook.cover" alt="现封面图" class="book-cover" />
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-success="handleUploadSuccess"
            :file-list="fileList"
            :auto-upload="false"
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          </el-upload>
        </el-form-item>
        <el-form-item label="介绍">
          <el-input v-model="editBook.description"></el-input>
        </el-form-item>
        <el-form-item label="库存">
          <el-input v-model="editBook.stock"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="saveEdit">保存</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import { useApi } from '@/api'
const api = useApi()

interface Book {
  cover: string
  name: string
  author: string
  price: number
  stock: number
  description: string
}

const props = defineProps<{
  bookInfoList: any
}>()

onMounted(async () => {
  // try {
  //   const response = await api.store.getBooks()
  //   books.value = response.data.books
  // } catch (error) {
  //   console.error('Error fetching data:', error)
  // }
})

const changeBookInfo = async (book: Book) => {
  try {
    await api.store.updateBookInfo({
      bookId: 2,
      bookName: 'afdfddffffffff',
      bookIntro: 'asdjaksdjajdkasdj',
      price: 20.0,
      author: 'danding',
      stockQuantity: 500,
      bookshopId: 2,
      profilePhoto: 'hasjdhjd.sadak'
    })
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

const books = ref(props.bookInfoList)

const dialogVisible = ref(false)
const editBook = reactive<Book>({
  cover: '',
  name: '',
  author: '',
  price: 0,
  stock: 0,
  description: ''
})

const fileList = ref([])

const handleEdit = (book: Book) => {
  Object.assign(editBook, book)
  dialogVisible.value = true
}

const handleUploadSuccess = (response: any, file: any) => {
  editBook.cover = URL.createObjectURL(file.raw)
}

const saveEdit = () => {
  // 保存修改后的书籍信息
  dialogVisible.value = false
}
</script>

<style scoped>
.book-table-container {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
}

.book-cover {
  width: 100px;
  height: auto;
  border-radius: 5px;
}

.el-table th,
.el-table td {
  text-align: center;
}

.el-dialog {
  width: 500px;
}

.el-form-item {
  margin-bottom: 20px;
}

.el-button {
  margin-right: 10px;
}

.upload-demo .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  background-color: #fafafa;
  width: 100%;
  height: 180px;
  line-height: 180px;
  text-align: center;
}
</style>
