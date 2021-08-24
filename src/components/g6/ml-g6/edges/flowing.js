/**
 * 描述：自定义注册边，自定义数据流动边
 */
const lineDash = [4, 2, 1, 2]
const line = {
  name: 'flowing',
  config: {
    // name 状态名，value 状态值， item 边 edge
    setState (name, value, item) {
      const shape = item.get('keyShape')
      const startPoint = shape.getPoint(0)
      const id = '12xx12x' || item.get('id')
      const group = item.get('group')
      const tamp = group.find(function (item) {
        return item.get('name') === id
      })

      if(name === 'running') {
        if(value) { // true
          if(!tamp) { // 圆形动画相关
            group.addShape('circle', {
              attrs: {
                x: startPoint.x,
                y: startPoint.y,
                fill: 'r(0.5, 0.5, 1) 0:#ff0000 1:#ffffff',
                r: 5,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'red',
                shadowBlur: 15,
              },
              name: id
            })
          }

          let index = 0
          shape.attr({
            stroke: '#ffcc00',
            endArrow: {path: 'M 0,0 L 10,5 Q 7,0,10,-5 z', fill: '#ffcc00'}
          })

          const cshape = group.find(function (item){
            return item.get('name') === id
          })
          if (cshape) {
            cshape.animate(
              (ratio) => {
                const tmPoint = shape.getPoint(ratio)
                return {
                  x: tmPoint.x,
                  y: tmPoint.y
                }
              },
              {
                repeat: true,
                duration: 1500
              }
            )
          }
        } else { 
          // value = false
          shape.attr({
            stroke: '#546ce9',
            endArrow: {path: 'M 0,0 L 10,5 Q 7,0,10,-5 z', fill: '#546ce9'}
          })
          shape.stopAnimate()
          shape.attr('lineDash', null)
          const end = group.find(function(item){ // 圆形动画相关
            return item.get('name') === id
          })
          end && end.stopAnimate()
          end && group.removeChild(end)
        }
      }
    }
  }
}

export default line