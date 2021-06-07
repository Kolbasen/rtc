import 'package:flutter/material.dart';
import 'package:lab_3/screens/fermat_screen.dart';
import 'package:lab_3/screens/genetic_screen.dart';
import 'package:lab_3/screens/perceptron_screen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'RTS labs',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Lab 3'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _selectedIndex = 0;

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  List<Widget> _widgetOptions = <Widget>[
    GeneticScreen(),
    FermatScreen(),
    PerceptronScreen(),
  ];

  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: _widgetOptions.elementAt(_selectedIndex),
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.ac_unit),
            label: 'Genetic',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.ac_unit),
            label: 'Ferma',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.ac_unit),
            label: 'Perception',
          ),
        ],
        currentIndex: _selectedIndex,
        selectedItemColor: Colors.blue,
        onTap: _onItemTapped,
      ),
    );
  }
}
