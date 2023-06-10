import { StyleSheet, Text, View , ScrollView, Image, FlatList, Button, TouchableOpacity} from 'react-native';


export const CurrentJioList = [
    {
      sport: "羽球",
      time: "5/7 13:00~16:00",
      people:"四人"
    },
    {
      sport: "籃球",
      time: "5/8 18:00~20:00",
      people:"四人"
    },
    {
      sport: "羽球",
      time: "5/9 10:00~12:00",
      people:"四人"
    }
  ];
  
export const PastJioList = [
    {
      title: "羽球",
      sub: "4/28 13:00~16:00 4人",
    },
    {
      title: "籃球",
      sub: "4/26 18:00~20:00 4人",
    },
    {
      title: "籃球",
      sub: "4/26 18:00~20:00 4人",
    },
    {
      title: "籃球",
      sub: "4/26 18:00~20:00 4人",
    },
    {
      title: "籃球",
      sub: "4/26 18:00~20:00 4人",
    },
    {
      title: "籃球",
      sub: "4/26 18:00~20:00 4人",
    }
];

export const placeList = [
  {
    title:"清大羽球場",
    sport:"羽球"
  },
  {
    title:"交大羽球場",
    sport:"羽球"
  },
  {
    title:"清大運動場",
    sport:"足球"
  },
  {
    title:"清大棒球場",
    sport:"棒球"
  },
  {
    title:"清大籃球場",
    sport:"籃球"
  },
  {
    title:"新科羽球場",
    sport:"羽球"
  },
  {
    title:"交大運動場",
    sport:"足球"
  },
  {
    title:"光復籃球場",
    sport:"籃球",
  },
  {
    title:"交大籃球場",
    sport:"籃球"
  }

];

export const peopleData = [
  {title:"1"},{title:"2"},{title:"3"},{title:"4"},{title:"5"},{title:"6"},{title:"7"},{title:"8"},{title:"9"},{title:"10"},
  {title:"11"},{title:"12"},{title:"13"},{title:"14"},{title:"15"},{title:"16"},{title:"17"},{title:"18"},{title:"19"},{title:"20"},
  {title:"無上限"},
];

export const Tag = (props) => {
  if (props.title=="") return(<View></View>);
  else return (
    <View style={styles.tagContainer}>
      <Text style={styles.subtitle4}>{props.title}</Text>
      <TouchableOpacity onPress={() => {props.f(props.title)}} style={styles.xmarkcontainer}><Text style={styles.subtitle4}>x</Text></TouchableOpacity>
    </View>
  );
};

export const PeopleItem = (props) => {
  return (
    <View style={[styles.currentJioContainer,{justifyContent:'center',height:60,alignItems:'center'}]}>
    <Text style={styles.subtitle2}>{props.title}</Text>
    </View>
  );
};

export const PlaceItem = (props) => {
  if (props.sport=="棒球") return (
    <View style={styles.currentJioContainer}>
    <Image style={styles.sportIcon} source={require("../../images/baseball.png")}></Image>
    <View style={[styles.currentJioContainer2,{justifyContent:'center'}]}>
    <Text style={styles.subtitle2}>{props.title}</Text>
    </View>
    </View>);
  else if (props.sport=="羽球") return (
    <View style={styles.currentJioContainer}>
    <Image style={styles.sportIcon} source={require("../../images/badminton.png")}></Image>
    <View style={[styles.currentJioContainer2,{justifyContent:'center'}]}>
    <Text style={styles.subtitle2}>{props.title}</Text>
    </View>
    </View>
  );
  else if (props.sport=="籃球") return (
    <View style={styles.currentJioContainer}>
    <Image style={styles.sportIcon} source={require("../../images/basketball.png")}></Image>
    <View style={[styles.currentJioContainer2,{justifyContent:'center'}]}>
    <Text style={styles.subtitle2}>{props.title}</Text>
    </View>
    </View>
  );
  else if (props.sport=="足球") return (
    <View style={styles.currentJioContainer}>
    <Image style={styles.sportIcon} source={require("../../images/soccer.png")}></Image>
    <View style={[styles.currentJioContainer2,{justifyContent:'center'}]}>
    <Text style={styles.subtitle2}>{props.title}</Text>
    </View>
    </View>
  );
  else return (<View></View>)
};

export const PastJioItem = ({title,sub}) => {
  if (title=="羽球") return(
    <View style={styles.currentJioContainer}>
      <Image style={styles.sportIcon} source={require("../../images/badminton.png")}></Image>
      <View style={styles.currentJioContainer2}>
        <Text style={styles.subtitle2}>{title}</Text>
        <Text style={styles.subtitle3}>{sub}</Text>
      </View>
      <TouchableOpacity style={styles.launchAgain}
                        onPress={() => {}}>
        <Text style={styles.ButtonWord}>再次發起</Text>
      </TouchableOpacity>
    </View>
  );
  else if  (title=="籃球") return(
    <View style={styles.currentJioContainer}>
      <Image style={styles.sportIcon} source={require("../../images/basketball.png")}></Image>
      <View style={styles.currentJioContainer2}>
        <Text style={styles.subtitle2}>{title}</Text>
        <Text style={styles.subtitle3}>{sub}</Text>
      </View>
      <TouchableOpacity style={styles.launchAgain}
                        onPress={() => {}}>
        <Text style={styles.ButtonWord}>再次發起</Text>
        </TouchableOpacity>
    </View>
  );
  else if (title=="足球") return(
    <View style={styles.currentJioContainer}>
      <Image style={styles.sportIcon} source={require("../../images/soccer.png")}></Image>
      <View style={styles.currentJioContainer2}>
        <Text style={styles.subtitle2}>{title}</Text>
        <Text style={styles.subtitle3}>{sub}</Text>
      </View>
      <TouchableOpacity style={styles.launchAgain}
                        onPress={() => {}}>
        <Text style={styles.ButtonWord}>再次發起</Text>
        </TouchableOpacity>
    </View>
  );
    else if (title=="棒球") return(
      <View style={styles.currentJioContainer}>
      <Image style={styles.sportIcon} source={require("../../images/baseball.png")}></Image>
      <View style={styles.currentJioContainer2}>
        <Text style={styles.subtitle2}>{title}</Text>
        <Text style={styles.subtitle3}>{sub}</Text>
      </View>
      <TouchableOpacity style={styles.launchAgain}
                        onPress={() => {}}>
        <Text style={styles.ButtonWord}>再次發起</Text>
        </TouchableOpacity>
    </View>
    );
    else return (<View></View>);
}
  
  export const CurrentJioItem = ({sport,time,people}) => {
    if (sport=="羽球") return(
    <View style={styles.currentJioContainer}>
      <Image style={styles.sportIcon} source={require("../../images/badminton.png")}></Image>
      <View style={styles.currentJioContainer2}>
        <Text style={styles.subtitle2}>{sport}</Text>
        <Text style={styles.subtitle3}>{time} {people}</Text>
      </View>
    </View>);
    else if (sport=="籃球") return(
      <View style={styles.currentJioContainer}>
        <Image style={styles.sportIcon} source={require("../../images/basketball.png")}></Image>
        <View style={styles.currentJioContainer2}>
          <Text style={styles.subtitle2}>{sport}</Text>
          <Text style={styles.subtitle3}>{time} {people}</Text>
        </View>
      </View>
    );
    else if (sport=="棒球") return(
      <View style={styles.currentJioContainer}>
        <Image style={styles.sportIcon} source={require("../../images/baseball.png")}></Image>
        <View style={styles.currentJioContainer2}>
          <Text style={styles.subtitle2}>{sport}</Text>
          <Text style={styles.subtitle3}>{time} {people}</Text>
        </View>
      </View>
    );
    else if (sport=="足球") return(
      <View style={styles.currentJioContainer}>
        <Image style={styles.sportIcon} source={require("../../images/soccer.png")}></Image>
        <View style={styles.currentJioContainer2}>
          <Text style={styles.subtitle2}>{sport}</Text>
          <Text style={styles.subtitle3}>{time} {people}</Text>
        </View>
      </View>
    );
    else return (<View></View>);
  }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      textAlign: 'center', 
      fontSize:35, 
      fontWeight: 'bold'
    },
    subtitle:{
      fontSize:22,
      fontWeight: 500,
      marginVertical:15
    },
    subtitle2:{
      fontSize:20
    },
    subtitle3:{
      fontSize:15,
      color: 'grey'
    },
    subtitle4:{
      fontSize:15,
      marginLeft:8,
      paddingTop:4
    },
    underOrangeLine:{
      height:6,
      width: 110,
      backgroundColor: '#FFC700',
      marginTop: 5
    },
    listStyle:{
      marginHorizontal: 30
    },
    sportIcon:{
      width:50,
      height:50
    },
    currentJioContainer:{
      flexDirection: 'row',
      paddingVertical:15,
      borderBottomColor: 'grey',
      borderBottomWidth:1
    },
    currentJioContainer2:{
      flexDirection: 'column',
      marginLeft:30
    },
    launchAgain:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      marginLeft: 'auto'
    },
    ButtonWord:{
      color: '#F5AC78'
    },
    tagContainer:{
      borderRadius:5,
      backgroundColor:'#AEAEAE',
      marginHorizontal:5,
      flexDirection:'row',
    }, 
    xmarkcontainer:{
      justifyContent:'center',
      alignItems:'center',
      paddingBottom:5,
      marginEnd:10
    }
  });