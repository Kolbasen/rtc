import 'package:lab_3/core/fermat_decomposition.dart';
import 'package:flutter/services.dart';
import 'package:flutter/material.dart';

class FermatScreen extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => FermatScreenState();
}

class FermatScreenState extends State<FermatScreen> {
  final _formKey = GlobalKey<FormState>();
  int number;
  dynamic result;
  var time;
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Column(
        children: [
          Row(children: [
            Container(
              padding: EdgeInsets.all(10),
              child: Text(
                'Number:',
                style: TextStyle(fontSize: 24),
              ),
            ),
            Expanded(
              child: Container(
                padding: EdgeInsets.all(10),
                child: TextFormField(
                  validator: (value) {
                    if (value == null) {
                      return null;
                    }
                    number = num.tryParse(value);
                    if (number == null) {
                      return '"$value" is not a valid number';
                    }
                    return null;
                  },
                  keyboardType: TextInputType.number,
                ),
              ),
            ),
          ]),
          SizedBox(height: 10),
          Container(
            padding: EdgeInsets.all(8),
            child: ElevatedButton(
              onPressed: () {
                if (_formKey.currentState.validate()) {
                  setState(() {
                    var timer = Stopwatch();
                    timer.start();
                    result = fermat(number);
                    timer.stop();
                    time = timer.elapsedMicroseconds;
                  });
                }
              },
              child: Text('Find'),
            ),
          ),
          Container(
            child: Row(
              children: [
                Text(
                  'Results',
                  style: TextStyle(fontSize: 24),
                ),
                Spacer(),
                Text(
                  result == null ? '' : 'p = ${result[0]}',
                  style: TextStyle(fontSize: 24),
                ),
                Spacer(),
                Text(
                  result == null ? '' : 'q = ${result[1]}',
                  style: TextStyle(fontSize: 24),
                ),
                Spacer(),
              ],
            ),
          ),
          SizedBox(height: 20),
          Container(
            child: Row(
              children: [
                Text(
                  'Time',
                  style: TextStyle(fontSize: 24),
                ),
                Spacer(),
                Text(
                  time == null ? '' : '$time ms',
                  style: TextStyle(fontSize: 24),
                ),
                Spacer(),
              ],
            ),
          )
        ],
      ),
    );
  }
}
