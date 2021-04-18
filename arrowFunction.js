    <script>
      function Animal1(){
          setTimeout(function(){
              this.age++
              console.log(this.age,this);
          }, 1000)
      }
      const a1 = new Animal1()

      function Animal2(){
          this.age = 11
          setTimeout(() => {
              this.age++
              console.log(this.age,this);
          },1000)
      }
      const a2 = new Animal2()
    </script>
