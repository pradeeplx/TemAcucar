import React, { Platform, ScrollView, View, StyleSheet } from 'react-native'
import Colors from "../Colors"
import Sentence from "./Sentence"
import UserMenuItem from "./UserMenuItem"

export default UserMenu = ({ currentUser, onSettings, onFeedback, onAbout, onSignOut, onUserDemands, onUserReviews, onSetLocation, onFacebook, facebookConnecting, onAdminDemands, onFlaggedDemands, signingOut }) => (
  <View style={{
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: Colors.blue,
  }}>
    <View style={{
      backgroundColor: Colors.white,
      alignSelf: 'stretch',
      padding: 10,
      paddingTop: (Platform.OS == 'ios' ? 30 : 10),
      flexDirection: 'row',
      alignItems: 'center',
    }}>
      <UserImage source={{uri: currentUser.image_url}} style={{marginRight: 10}} />
      <View style={{
        flexDirection: 'column',
        flex: 1,
      }}>
        <Sentence style={{ 
          color: Colors.blue,
          fontSize: 20,
        }}>
          { currentUser.first_name } { currentUser.last_name }
        </Sentence>
      </View>
    </View>
    <ScrollView style={{
      flex: 1,
    }}>
      <UserMenuItem onPress={onUserDemands} icon="ios-list-outline">
        Meus pedidos
      </UserMenuItem>
      <UserMenuItem onPress={onUserReviews} icon="ios-star-outline">
        Minhas avaliações
      </UserMenuItem>
      { !currentUser.facebook_uid && <UserMenuItem onPress={onFacebook} icon="logo-facebook">
        { facebookConnecting ? 'Conectando...' : 'Conectar Facebook' }
      </UserMenuItem> }
      <UserMenuItem onPress={onSetLocation} icon="ios-pin-outline">
        Alterar endereço
      </UserMenuItem>
      <UserMenuItem onPress={onSettings} icon="ios-settings-outline">
        Configurações
      </UserMenuItem>
      { currentUser.admin && <UserMenuItem onPress={onAdminDemands} icon="ios-list-box-outline">
        Todos os pedidos
      </UserMenuItem> }
      { currentUser.admin && <UserMenuItem onPress={onFlaggedDemands} icon="ios-alert-outline">
        Pedidos impróprios
      </UserMenuItem> }
      <UserMenuItem onPress={onFeedback} icon="ios-heart-outline">
        Feedback
      </UserMenuItem>
      <UserMenuItem onPress={onAbout} icon="ios-information-circle-outline">
        Sobre
      </UserMenuItem>
      <View style={{
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 10,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.white,
        alignSelf: 'stretch',
      }} />
      <UserMenuItem onPress={onSignOut} icon="ios-power-outline" type="light" style={{
        paddingBottom: 20,
      }}>
        { signingOut ? 'Saindo...' : 'Sair' }
      </UserMenuItem>
    </ScrollView>
  </View>
)
