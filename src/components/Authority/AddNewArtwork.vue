<template>
  <div>
    <el-dialog title="Add a new artwork" :visible.sync="visible" width="50%" center>
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Owner Email" required>
          <el-input v-model.number="form.ownerId"></el-input>
        </el-form-item>
        <el-form-item label="Artwork Title" required>
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="Artist" required>
          <el-input v-model="form.artist"></el-input>
        </el-form-item>
        <el-form-item label="Location" required>
          <el-input v-model="form.location"></el-input>
        </el-form-item>
        <el-form-item label="Description" required>
          <el-input v-model="form.description" type="textarea" rows="4"></el-input>
        </el-form-item>
        <el-upload style=""
          class="upload-demo"
          drag
          action="http://localhost:3000/upload"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
          <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
        </el-upload>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">Create</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    props:[
          "show"
      ],
    data() {
      return {
       form: {
         ownerId: '',
         title: '',
         artist: '',
         location: '',
         description: ''
        },
        newFile:''
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!')
        console.log(this.form)
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              message: 'Submitted successfully',
              type: 'success'
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    },
    computed: {
      visible: {
      get() {
        return this.show;
      },
      set(newValue) {
        this.$emit("close") // let parent set this dialog to invisible
      }
    }
    }
  }
</script>
