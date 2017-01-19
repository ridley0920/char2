<template>
  <div>
    <div>
      <p>Edit Main Sheet</p>
      <div>Name: <input v-model="newVal.name"></input></div>
      
      <div>Class: <input v-model="newVal.class"></input></div>
      <div>Level: <input v-model="newVal.level"></input></div>
      <div>EXP: <input v-model="newVal.exp"></input></div>
      
      <div>Background: <input v-model="newVal.back"></input></div>
      <div>Social Class: <input v-model="newVal.socialClass"></input></div>
      <div>Max Health: <input v-model="newVal.hpMax"></input></div>
      <div>Current Health: <input v-model="newVal.hpCur"></input></div>

      <div>Speed: <input v-model="newVal.speed"></input></div>
      <div>Defense: <input v-model="newVal.def"></input></div>
      <div>Armor: <input v-model="newVal.armor"></input></div>
      <div>Penalty: <input v-model="newVal.penalty"></input></div>
      
      <div>Accuracy: <input v-model="newVal.acc"></input></div>
      <div>Communication: <input v-model="newVal.com"></input></div>
      <div>Constitution: <input v-model="newVal.con"></input></div>
      <div>Dexterity: <input v-model="newVal.dex"></input></div>
      <div>Fighting: <input v-model="newVal.fig"></input></div>
      <div>Intelligence: <input v-model="newVal.int"></input></div>
      <div>Perception: <input v-model="newVal.perc"></input></div>
      <div>Strength: <input v-model="newVal.str"></input></div>
      <div>Willpower: <input v-model="newVal.will"></input></div>
      
      <div>Accuracy Focus:
        <div v-for="(focus, index) in newVal.accF">
          <span>Focus {{ index+1 }} </span><input v-model="focus.val"></input>
        </div>
        <button v-on:click="addF('acc')">CLICK ME HO</button>
      </div>
      
      <div>Communication Focus: 
        <div v-for="(focus, index) in newVal.comF">
          <span>Focus {{ index+1 }} </span><input v-model="focus.val"></input>
        </div>
        <button v-on:click="addF('com')">CLICK ME HO</button>
      </div>
      
      <div>Constitution Foucs:  
        <div v-for="(focus, index) in newVal.conF">
          <span>Focus {{ index+1 }} </span><input v-model="focus.val"></input>
        </div>
        <button v-on:click="addF('con')">CLICK ME HO</button>
      </div>

      <div>Dexterity Focus:  
        <div v-for="(focus, index) in newVal.dexF">
          <span>Focus {{ index+1 }} </span><input v-model="focus.val"></input>
        </div>
        <button v-on:click="addF('dex')">CLICK ME HO</button>
      </div>

      <div>Intelligence Focus: 
        <div v-for="(focus, index) in newVal.intF">
          <span>Focus {{ index+1 }} </span><input v-model="focus.val"></input>
        </div>
        <button v-on:click="addF('int')">CLICK ME HO</button>
      </div>

      <div>Perception Focus: 
        <div v-for="(focus, index) in newVal.percF">
          <span>Focus {{ index+1 }} </span><input v-model="focus.val"></input>
        </div>
        <button v-on:click="addF('perc')">CLICK ME HO</button>
      </div>

      <div>Strength Focus:  
        <div v-for="(focus, index) in newVal.strF">
          <span>Focus {{ index+1 }} </span><input v-model="focus.val"></input>
        </div>
        <button v-on:click="addF('str')">CLICK ME HO</button>
      </div>

      <div>Willpower Focus: 
        <div v-for="(focus, index) in newVal.willF">
          <span>Focus {{ index+1 }} </span><input v-model="focus.val"></input>
        </div>
        <button v-on:click="addF('will')">CLICK ME HO</button>
      </div>

      <div>Powers: <input v-model="newVal.powers"></input></div>

      <div>Move: <input v-model="newVal.move"></input></div>
      <div>Charge: <input v-model="newVal.charge"></input></div>
      <div>Run: <input v-model="newVal.run"></input></div>
      
      <div> Weapons
        <div v-for="(weap, index) in newVal.weapons">
          <div>Weapon {{ index+1 }} Name: <input v-model="weap.name"></input></div>
          <div>Weapon {{ index+1 }} Roll: <input v-model="weap.roll"></input></div>
          <div>Weapon {{ index+1 }} Damage: <input v-model="weap.damage"></input></div>
          <div>Weapon {{ index+1 }} Type: <input v-model="weap.type"></input></div>
        </div>
        <button v-on:click="addWeap()">MAYHEM</button>
      </div>
      <div>Equipment: <input v-model="newVal.equip"></input></div>
      
      <div>Money: <input v-model="newVal.money"></input></div>
      <button v-on:click="sendChar()">Send Value</button>
      <div v-on:load="getChar()"></div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        place: 0,
        char: {
          vals: {
          }
        },
        newVal: {
          name: '',
          class: '',
          level: '',
          exp: '',
          back: '',
          socialClass: '',
          hpMax: '',
          hpCur: '',
          speed: '',
          def: '',
          armor: '',
          penalty: '',
          acc: '',
          com: '',
          con: '',
          dex: '',
          int: '',
          perc: '',
          str: '',
          will: '',
          accF: [{}],
          comF: [{}],
          conF: [{}],
          dexF: [{}],
          intF: [{}],
          percF: [{}],
          strF: [{}],
          willF: [{}],
          powers: '',
          move: '',
          charge: '',
          run: '',
          weapons: [
            {
              name: '',
              roll: '',
              damage: '',
              type: ''
            }
          ],
          equip: '',
          money: ''
        }
      }
    },
    methods: {
      sendChar (callback) {
        console.log(this.newVal)
        this.$http({
          url: '/send',
          body: this.newVal,
          method: 'POST'
        })
        .then(function (response) {
          console.log('data sent')
        }, function (response) {
          console.error('Error sending data')
        })
      },
      getChar (callback) {
        this.$http({ url: '/get', data: 'test', method: 'GET' })
        .then(function (response) {
          console.log('data got')
          this.char = response.data
        }, function (response) {
          console.error('Error retrieving data')
        })
      },
      addF (focus) {
        if (focus === 'acc') {
          this.newVal.accF.push({val: ''})
        } else if (focus === 'com') {
          this.newVal.comF.push({val: ''})
        } else if (focus === 'con') {
          this.newVal.conF.push({val: ''})
        } else if (focus === 'dex') {
          this.newVal.dexF.push({val: ''})
        } else if (focus === 'int') {
          this.newVal.intF.push({val: ''})
        } else if (focus === 'perc') {
          this.newVal.percF.push({val: ''})
        } else if (focus === 'str') {
          this.newVal.strF.push({val: ''})
        } else if (focus === 'will') {
          this.newVal.willF.push({val: ''})
        }
        // this.newVal.accF.length + 1
      },
      addWeap () {
        this.newVal.weapons.push({name: '', roll: '', damage: '', type: ''})
      }
    }
  }
</script>