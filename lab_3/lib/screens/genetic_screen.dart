import 'package:flutter/services.dart';
import 'package:flutter/material.dart';
import 'package:lab_3/core/genetic.dart';

class GeneticScreen extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => GeneticScreenState();
}

class GeneticScreenState extends State<GeneticScreen> {
  final _formKey = GlobalKey<FormState>();
  int a, b, c, d, res;
  var time;
  dynamic result;
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            padding: EdgeInsets.all(8.0),
            child: Text(
              'a',
              style: TextStyle(fontSize: 20.0),
            ),
          ),
          Container(
            padding: EdgeInsets.all(8.0),
            child: TextFormField(
              validator: (value) {
                if (value == null) {
                  return null;
                }
                a = num.tryParse(value);
                if (a == null) {
                  return '"$value" is not a valid number';
                }
                return null;
              },
              keyboardType: TextInputType.number,
            ),
          ),
          Container(
            padding: EdgeInsets.all(8.0),
            child: Text(
              'b',
              style: TextStyle(fontSize: 20.0),
            ),
          ),
          Container(
            padding: EdgeInsets.all(8.0),
            child: TextFormField(
              validator: (value) {
                if (value == null) {
                  return null;
                }
                b = num.tryParse(value);
                if (b == null) {
                  return '"$value" is not a valid number';
                }
                return null;
              },
              keyboardType: TextInputType.number,
            ),
          ),
          Container(
            padding: EdgeInsets.all(8.0),
            child: Text(
              'c',
              style: TextStyle(fontSize: 20.0),
            ),
          ),
          Container(
            padding: EdgeInsets.all(8.0),
            child: TextFormField(
              validator: (value) {
                if (value == null) {
                  return null;
                }
                c = num.tryParse(value);
                if (c == null) {
                  return '"$value" is not a valid number';
                }
                return null;
              },
              keyboardType: TextInputType.number,
            ),
          ),
          Container(
            padding: EdgeInsets.all(8.0),
            child: Text(
              'd',
              style: TextStyle(fontSize: 20.0),
            ),
          ),
          Container(
            padding: EdgeInsets.all(8.0),
            child: TextFormField(
              validator: (value) {
                if (value == null) {
                  return null;
                }
                d = num.tryParse(value);
                if (d == null) {
                  return '"$value" is not a valid number';
                }
                return null;
              },
              keyboardType: TextInputType.number,
            ),
          ),
          Container(
            padding: EdgeInsets.all(8.0),
            child: Text(
              'y',
              style: TextStyle(fontSize: 20.0),
            ),
          ),
          Container(
            padding: EdgeInsets.all(8.0),
            child: TextFormField(
              validator: (value) {
                if (value == null) {
                  return null;
                }
                res = num.tryParse(value);
                if (res == null) {
                  return '"$value" is not a valid number';
                }
                return null;
              },
              keyboardType: TextInputType.number,
            ),
          ),
          Container(
            padding: EdgeInsets.all(8.0),
            child: ElevatedButton(
              onPressed: () {
                if (_formKey.currentState.validate()) {
                  setState(
                    () {
                      var timer = Stopwatch();
                      timer.start();
                      result = solve([a, b, c, d, res], 2000, 4, 0.05);
                      timer.stop();
                      time = timer.elapsedMilliseconds;
                      result = result[0];
                    },
                  );
                }
              },
              child: Text('Find'),
            ),
          ),
          Container(
            child: Text(
              'Results',
              style: TextStyle(fontSize: 20.0),
            ),
          ),
          SizedBox(height: 10.0),
          Container(
            child: Text(
              result == null ? '' : ' [x1, x2, x3, x4] = $result',
              style: TextStyle(fontSize: 20.0),
            ),
          ),
          SizedBox(height: 10.0),
          Container(
            child: Text(
              time == null ? '' : 'Time = $time ms',
              style: TextStyle(fontSize: 20.0),
            ),
          )
        ],
      ),
    );
  }
}
