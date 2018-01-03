<template>
  <div class="v-suggestions">
    <input type="text" class="input completor-input"
           v-on:keydown="onKeyDown"
           v-on:blur="hideItems"
           v-on:focus="showItems = true"
           v-model="query"
           :placeholder="extendedOptions.placeholder">
    <div class="suggestions">
      <ul class="items" v-show="items.length > 0 && showItems === true">
        <li class="item"
            v-for="(item, index) in items"
            @click.prevent="selectItem(index)"
            v-bind:class="{ 'is-active': index === activeItemIndex }">
          <slot name="item"
                :item="item">
            {{item}}
          </slot>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import debounce from 'debounce'
  import './Suggestions.css'

  export default {
    props: {
      options: {
        type: Object,
        default: {}
      },
      onInputChange: {
        type: Function,
        required: true
      },
      onItemSelected: {
        type: Function
      },
      value: {
        type: String,
        required: true
      }
    },
    data () {
      const defaultOptions = {
        debounce: 0,
        placeholder: ''
      }
      const extendedOptions = Object.assign({}, defaultOptions, this.options)
      // console.log(extendedOptions)
      return {
        extendedOptions,
        query: this.value,
        lastSetQuery: null,
        items: [],
        activeItemIndex: -1,
        showItems: false
      }
    },
    beforeMount () {
      if (this.extendedOptions.debounce !== 0) {
        this.onQueryChanged = debounce(this.onQueryChanged, this.extendedOptions.debounce)
      }
    },
    watch: {
      'query': function (newValue, oldValue) {
        if (newValue === this.lastSetQuery) {
          this.lastSetQuery = null
          return
        }
        this.onQueryChanged(newValue)
        this.$emit('input', newValue)
      },
      'value': function (newValue, oldValue) {
        this.setInputQuery(newValue)
      }
    },
    methods: {
      onItemSelectedDefault (item) {
        if (typeof item === 'string') {
          this.$emit('input', item)
          this.setInputQuery(item)
          this.showItems = false
          // console.log('change value')
        }
      },
      hideItems () {
        setTimeout(() => {
          this.showItems = false
        }, 150)
      },
      showResults () {
        this.showItems = true
      },
      setInputQuery (value) {
        this.lastSetQuery = value
        this.query = value
      },
      onKeyDown (e) {
        switch (e.keyCode) {
          case 40:
            this.highlightItem('down')
            e.preventDefault()
            break
          case 38:
            this.highlightItem('up')
            e.preventDefault()
            break
          case 13:
            this.selectItem()
            e.preventDefault()
            break
          default:
            return true
        }
      },
      selectItem (index) {
        let item = null
        if (typeof index === 'undefined') {
          if (this.activeItemIndex === -1) {
            return
          }
          item = this.items[this.activeItemIndex]
        } else {
          item = this.items[index]
        }
        if (!item) {
          return
        }
        if (this.onItemSelected) {
          this.onItemSelected(item)
        } else {
          this.onItemSelectedDefault(item)
        }
        this.hideItems()
      },
      highlightItem (direction) {
        if (this.items.length === 0) {
          return
        }
        let selectedIndex = this.items.findIndex((item, index) => {
          return index === this.activeItemIndex
        })
        if (selectedIndex === -1) {
          // nothing selected
          if (direction === 'down') {
            selectedIndex = 0
          } else {
            selectedIndex = this.items.length - 1
          }
        } else {
          this.activeIndexItem = 0
          if (direction === 'down') {
            selectedIndex++
            if (selectedIndex === this.items.length) {
              selectedIndex = 0
            }
          } else {
            selectedIndex--
            if (selectedIndex < 0) {
              selectedIndex = this.items.length - 1
            }
          }
        }
        this.activeItemIndex = selectedIndex
      },
      setItems (items) {
        this.items = items
        this.activeItemIndex = -1
        this.showItems = true
      },
      onQueryChanged (value) {
        const result = this.onInputChange(value)
        this.items = []
        if (typeof result === 'undefined' || typeof result === 'boolean' || result === null) {
          return
        }
        if (result instanceof Array) {
          this.setItems(result)
        } else if (typeof result.then === 'function') {
          result.then(items => {
            this.setItems(items)
          })
        }
      }
    }
  }
</script>
