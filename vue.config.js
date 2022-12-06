import MyButton from '@/components/UI/MyButton';
import MyInput from '@/components/UI/MyInput';
import MyDialog from '@/components/UI/MyDialog';

export default [
    MyButton,
    MyInput,
    MyDialog
]



const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
