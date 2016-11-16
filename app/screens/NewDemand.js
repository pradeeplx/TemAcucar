import React, { Component } from 'react'
import { View, Image, Platform, StyleSheet } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import { validateFunction } from 'validate-model'
import { reduxForm } from 'redux-form'
import MapView from 'react-native-maps'
import Slider from 'react-native-slider'

import { fontFactor } from "../helpers"
import Colors from "../Colors"
import DemandValidators from '../validators/DemandValidators'
import NavBar from "../components/NavBar"
import Sentence from "../components/Sentence"
import Form from "../components/Form"
import FormTextInput from "../components/FormTextInput"
import FormError from "../components/FormError"
import FormSubmit from "../components/FormSubmit"
import UserMap from "../components/UserMap"

const validators = {
  radius: DemandValidators.radius,
  name: DemandValidators.name,
  description: DemandValidators.description,
}

class NewDemand extends Component {
  componentDidMount() {
    const { initializeForm } = this.props
    initializeForm({radius: '2000'})
    GoogleAnalytics.trackScreenView('NewDemand')
  }

  componentWillReceiveProps(nextProps) {
    const { onViewCreatedDemand, demands } = nextProps
    const { creating, createError } = demands
    const oldCreating = this.props.demands.creating
    if (oldCreating && !creating && !createError) {
      onViewCreatedDemand()
    }
  }

  handleSlide(value) {
    const { fields: { radius } } = this.props
    radius.onChange(Math.round(value).toString())
  }

  renderMap() {
    const { auth, fields } = this.props
    const { currentUser: { latitude, longitude } } = auth
    const radius = parseInt(fields.radius.value) / 1000
    return (
      <UserMap
        latitude={latitude}
        longitude={longitude}
        delta={parseFloat(0.02 * radius)}
        text={ radius > 1 ? `${Math.round(radius * 10) / 10}km` : `${Math.round(radius * 1000)}m` }
      />
    )
  }

  render() {
    const { onCreateDemand, fields: { radius, name, description }, demands: { createError, creating } } = this.props
    const length = (description && description.value ? description.value.length : 0)
    const proportion = Math.round((length / 80) * 100)
    const progress = (proportion > 92 ? 100 : (proportion > 0 ? proportion + 8 : proportion))
    const progressMessage = (
      progress < 35 ? 'Para que você vai usar?' : (
        progress < 75 ? 'Quanto tempo pretende ficar?' : (
          progress < 100 ? 'Legal, agora sim!' : 'Excelente história!'
        )
      )
    )
    const progressColor = (
      progress < 35 ? Colors.mediumLightBeige : (
        progress < 75 ? Colors.mediumLightPink : (
          progress < 100 ? Colors.mediumPink : Colors.blue
        )
      )
    )
    return (
      <View style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
        <NavBar title="O que você precisa?" />
        <Form>
          { radius.value && this.renderMap() }
          <Sentence style={{
            fontSize: 14 * fontFactor(),
            textAlign: 'center',
            marginTop: 15,
            marginBottom: 5,
          }}>
            Até onde você pode ir buscar?
          </Sentence>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 10,
            marginBottom: 5,
          }}>
            <Sentence style={{
              color: Colors.gray,
            }}>
              500m
            </Sentence>
            <Slider
              disabled={false}
              minimumValue={500}
              maximumValue={5000}
              step={100}
              value={parseInt(radius.value)}
              onValueChange={this.handleSlide.bind(this)}
              minimumTrackTintColor={Colors.blue}
              style={{
                flex: 1,
                height: 30,
                marginHorizontal: 10,
              }}
              trackStyle={{
                height: 4,
                backgroundColor: Colors.lightGray,
              }}
              thumbStyle={{
                width: 24,
                height: 24,
                backgroundColor: Colors.white,
                borderWidth: StyleSheet.hairlineWidth,
                borderColor: Colors.gray,
                borderRadius: 12,
              }}
            />
            <Sentence style={{
              color: Colors.gray,
            }}>
              5km
            </Sentence>
          </View>
          <FormTextInput
            name='name'
            title='Objeto'
            placeholder='Ex. Furadeira'
            titleStyle={{ flex: 0.35 }}
            {...name}
          />
          <FormTextInput
            name='description'
            title='Descrição'
            placeholder='Convença seus vizinhos: conte para eles porque precisa desse objeto e porque é importante para você.'
            multiline={true}
            maxLength={255}
            titleStyle={{ flex: 0.35 }}
            inputStyle={{
              height: 100 * fontFactor(),
            }}
            {...description}
          />
          <View style={{
            backgroundColor: Colors.lightGray,
            borderRadius: 12 * fontFactor(),
            margin: 15,
            marginBottom: 0,
            flexDirection: 'row',
            height: 24 * fontFactor(),
          }}>
            <View style={{
              backgroundColor: progressColor,
              borderRadius: 12 * fontFactor(),
              height: 24 * fontFactor(),
              flex: progress,
            }}>
            </View>
            <View style={{
              flex: 100 - progress,
            }}>
            </View>
            <Sentence style={{
              textAlign: 'center',
              backgroundColor: 'transparent',
              position: 'absolute',
              marginTop: 3 * fontFactor(),
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}>
              { progressMessage }
            </Sentence>
          </View>
          <Sentence style={{
            fontSize: 9 * fontFactor(),
            color: Colors.gray,
            textAlign: 'center',
            marginTop: 4,
          }}>
            {length} letrinhas preenchidas
          </Sentence>
          { createError && <FormError message={DemandValidators.errorMessage(createError)} /> }
        </Form>
        <FormSubmit
          {...this.props}
          isLoading={creating}
          onSubmit={onCreateDemand}
        >
          Pedir emprestado
        </FormSubmit>
      </View>
    )
  }
}

NewDemand = reduxForm({
  form: 'newDemand',
  fields: ['radius', 'name', 'description'],
  validate: validateFunction(validators),
})(NewDemand)

export default NewDemand
