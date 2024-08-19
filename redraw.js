function redraw(correct_string, student_string) {
  if (answer_type == "precedence") { 
    //   if(correct_string != "" ){

    answer_Nodes = deserialiseC(correct_string);
    answer_Links = deserialiseL(correct_string);

    //  }

    //   if(student_string != "" ){

    submission_Nodes = deserialiseC(student_string);
    submission_Links = deserialiseL(student_string);

    //  }

    var linkedArray_answer = new Array();
    var linkedArray_submission = new Array();
    linkedArray_answer = convert(answer_Nodes, answer_Links);
    linkedArray_submission = convert(submission_Nodes, submission_Links);

    correct_root_id = findrootnodebyid(answer_Nodes, answer_Links);
    submission_root_id = findrootnodebyid(submission_Nodes, submission_Links);

    var linkedrootnode_correct = findlinkednodebyid(
      correct_root_id,
      linkedArray_answer
    );

    var linkedrootnode_submission = findlinkednodebyid(
      submission_root_id,
      linkedArray_submission
    );

    recursive(linkedrootnode_correct);

    try {
      recursive(linkedrootnode_submission);
    } catch (err) {
      console.log(err);
    }

    // calculate the right answer
    var deep_answer = linkedrootnode_correct.level;
    var deep_student = linkedrootnode_submission.level;
    calculate(deep_answer, linkedArray_answer);
    comparecheck(deep_student, linkedArray_submission);
  }

  //mode= presedence

  if (mode == "correct" && answer_type == "precedence") {

     for (var n = 0; n < linkedArray_answer.length; n++) {
      var answer_linkednode = linkedArray_answer[n];
      var answer_node = linkedArray_answer[n].node;

      for (var m = 0; m < linkedArray_submission.length; m++) {
        var student_linkednode = linkedArray_submission[m];
        var student_node = linkedArray_submission[m].node;

        if (student_node.activity == answer_node.activity) {
          if (answer_node.EFT == student_node.EFT) {
            if (student_node.EFTcolor == "red") {
              answer_node.EFTcolor = "blue";
            } else {
              answer_node.EFTcolor = "default";
            }
          } else {
            answer_node.EFTcolor = student_node.EFTcolor;
          }
          if (answer_node.EST == student_node.EST) {
            if (student_node.ESTcolor == "red") {
              answer_node.ESTcolor = "blue";
            } else {
              answer_node.ESTcolor = "default";
            }
          } else {
            answer_node.ESTcolor = student_node.ESTcolor;
          }

          if (answer_node.FF == student_node.FF) {
            if (student_node.FFcolor == "red") {
              answer_node.FFcolor = "blue";
            } else {
              answer_node.FFcolor = "default";
            }
          } else {
            answer_node.FFcolor = student_node.FFcolor;
          }
          if (answer_node.LFT == student_node.LFT) {
            if (student_node.LFTcolor == "red") {
              answer_node.LFTcolor = "blue";
            } else {
              answer_node.LFTcolor = "default";
            }
          } else {
            answer_node.LFTcolor = student_node.LFTcolor;
          }

          if (answer_node.LST == student_node.LST) {
            if (student_node.LSTcolor == "red") {
              answer_node.LSTcolor = "blue";
            } else {
              answer_node.LSTcolor = "default";
            }
          } else {
            answer_node.LSTcolor = student_node.LSTcolor;
          }

          if (answer_node.TF == student_node.TF) {
            if (student_node.TFcolor == "red") {
              answer_node.TFcolor = "blue";
            } else {
              answer_node.TFcolor = "default";
            }
          } else {
            answer_node.TFcolor = student_node.TFcolor;
          }

          var correctbox = new Array();
          var studentbox = new Array();

          for (var k = 0; k < answer_linkednode.prevNode.length; k++) {
            var temp = findnodebyid(
              answer_linkednode.prevNode[k].id,
              linkedArray_answer
            );

            correctbox.push(temp.node.activity);
          }

          for (var k = 0; k < student_linkednode.prevNode.length; k++) {
            var temp = findnodebyid(
              student_linkednode.prevNode[k].id,
              linkedArray_submission
            );
            studentbox.push(temp.node.activity);
          }

          if (!correctbox.sort().compare(studentbox.sort())) {
            answer_node.left_red = "red";
          }

          //next

          var correctbox_next = new Array();
          var studentbox_next = new Array();
          for (var k = 0; k < answer_linkednode.nextNodes.length; k++) {
            var temp = findnodebyid(
              answer_linkednode.nextNodes[k].id,
              linkedArray_answer
            );

            if (typeof temp != "undefined") {
              correctbox_next.push(temp.node.activity);
            }
          }

          for (var k = 0; k < student_linkednode.nextNodes.length; k++) {
            var temp = findnodebyid(
              student_linkednode.nextNodes[k].id,
              linkedArray_submission
            );
            if (typeof temp != "undefined") {
              studentbox_next.push(temp.node.activity);
            }
          }
          if (!correctbox_next.sort().compare(studentbox_next.sort())) {
            answer_node.right_red = "red";
          }
        }
      }
    }

    // compare the subbmission page
    //checking nodes missing // covert this to a function as well.

    for (var n = 0; n < linkedArray_answer.length; n++) {
      var answer_node = linkedArray_answer[n].node;
      var flag = "exsit";
      var repeat = 0;

      for (var m = 0; m < linkedArray_submission.length; m++) {
        var student_node = linkedArray_answer[m].node;
      }

      //repeated will be marked as missing as well
    }

    checkingDup(linkedArray_answer, linkedArray_submission);

    for (var n = 0; n < answer_Links.length; n++) {
      var link = answer_Links[n];
      link.strokestyle = "red";
      //console.log(link);
      for (var m = 0; m < submission_Links.length; m++) {
        var sublink = submission_Links[m];
        //console.log(sublink);
        if (
          link.Tactivity == sublink.Tactivity &&
          link.Hactivity == sublink.Hactivity
        ) {
          link.strokestyle = "#666";
          break;
        }
      }
    }

    //draw nodes.
    for (var n = 0; n < linkedArray_answer.length; n++) {
      var node = linkedArray_answer[n].node;
      console.log(node);
      drawnode(node);
    }

    addConnections(answer_Links);  
  } else if (mode == "correct" && answer_type == "arrow") {
    myNodes = deserialiseC(correct_string);
    mylinks = deserialiseL(correct_string);
    submissionNodes = deserialiseC(student_string);
    submissionlinks = deserialiseL(student_string);

    for (n = 0; n < myNodes.length; n++) {
      var node = myNodes[n];
      // console.log(node);
      drawnode(node);
    }

    //data structure first
    // nodelist

    function findlinkednode(id) {
      for (x = 0; x < linkedArray2.length; x++) {
        var li = linkedArray2[x];
        if (li.id == id) {
          return li;
        }
      }
      return "none";
    }

    var linkedArray = new Array();
    var linkedArray2 = new Array();

    for (n = 0; n < myNodes.length; n++) {
      var node = myNodes[n];
      var linkedNode = new NodeClass(node);
      linkedArray.push(linkedNode);
      linkedArray2.push(linkedNode);
    }

    for (j = 0; j < linkedArray.length; j++) {
      var linkedNode = linkedArray[j];
      var children = new Array();
      var parents = new Array();

      for (var n = 0; n < mylinks.length; n++) {
        var link = mylinks[n];
        console.log(link);
        if (link.t == linkedNode.id) {
          parents.push(findlinkednode(link.h));
        }

        if (link.h == linkedNode.id) {
          children.push(findlinkednode(link.t));
        }
      }
      linkedNode.prevNode = parents;
      linkedNode.nextNodes = children;
      console.log(linkedNode);
    }

    // connectionlist

    var linkedconnections = new Array();
    var linkedconnectionsserach = new Array();

    for (x = 0; x < mylinks.length; x++) {
      var link = mylinks[x];
      var flag = "red";
      for (var n = 0; n < submissionlinks.length; n++) {
        var sublink = submissionlinks[n];
        if (sublink.activity == link.activity) {
          flag = "black";
        }
      }
      if (flag == "black") {
        link.color = "black";
      } else {
        link.color = "red";
      }
    }

    for (x = 0; x < mylinks.length; x++) {}

    for (j = 0; j < linkedArray.length; j++) {
      var linkedNode = linkedArray[j];
      var predessors = Array();
      var successors = Array();

      predessors = linkedNode.prevNode;
      successors = linkedNode.nextNodes;

      //findlink();
      var prevlink = Array();
      for (p = 0; p < predessors.length; p++) {
        var head = predessors[p].id;
        var link = findlink(head, linkedNode.id);
        prevlink.push(link);
      }
      linkedNode.prevconnectors = prevlink;

      var suclink = Array();
      for (s = 0; s < successors.length; s++) {
        var tail = successors[s].id;
        var link = findlink(linkedNode.id, tail);
        suclink.push(link);
      }
      linkedNode.nextconnectors = suclink;
    }

    var root = findrootnode();
    var sub_root = findsubrootnode();

    var linkedrootnode = findlinkednode(root.id);
    recursive(linkedrootnode);

    var deep = linkedrootnode.level;
    var maxvalueofEFT = 0;
    console.log(linkedArray);
    for (var n = deep; n > 0; n--) {
      for (var j = 0; j < linkedArray.length; j++) {
        var lnode = linkedArray[j];
        if (lnode.level == n) {
          var parentlinks = lnode.prevconnectors;
          var maxValudeofParentEFT = 0;
          for (var k = 0; k < parentlinks.length; k++) {
            var linkdata = parentlinks[k];

            var parentEFT = linkdata.EFT;
            if (maxValudeofParentEFT < parentEFT) {
              maxValudeofParentEFT = parentEFT;
              if (maxValudeofParentEFT > maxvalueofEFT) {
                maxvalueofEFT = maxValudeofParentEFT;
              }
            }
          }

          var nextlinks = lnode.nextconnectors;
          for (var k = 0; k < nextlinks.length; k++) {
            var linkdata = nextlinks[k];
            calculateEST(linkdata, maxValudeofParentEFT);
            calculateEFT(linkdata);
          }
        }
      }
    }

    for (var i = 1; i <= deep; i++) {
      for (var j = 0; j < linkedArray.length; j++) {
        var lnode = linkedArray[j];
        if (lnode.level == i) {
          var childrelinks = lnode.nextconnectors;
          var ValueofChildEFT = maxvalueofEFT;
          var ValueofChildEST = maxvalueofEFT;

          for (var k = 0; k < childrelinks.length; k++) {
            var linkdata = childrelinks[k];
            var childLST = linkdata.LST;
            var childEST = linkdata.EST;
            if (childLST < ValueofChildEFT) {
              ValueofChildEFT = childLST;
            }

            if (childEST < ValueofChildEST) {
              ValueofChildEST = childEST;
            }
          }

          var prelinks = lnode.prevconnectors;
          for (var k = 0; k < prelinks.length; k++) {
            link = prelinks[k];
            calculateLFT(link, ValueofChildEFT);
            calculateLST(link);
            calculateFFTF(link, ValueofChildEST);
          }
        }
      }
    }

    addConnections(mylinks);
  }
}
