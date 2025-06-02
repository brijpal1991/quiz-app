import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'quiz-app';
  currentQuestionIndex = 0;
  score = 0;
  quizCompleted = false;

  questions = [
    {
      question: 'What is the capital of India?',
      options: ['Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
      answer: 'Delhi'
    },
    {
      question: 'What is 5 + 3?',
      options: ['5', '8', '10', '15'],
      answer: '8'
    },
    {
      question: 'Which is the largest planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Jupiter'
    }
  ];

  selectAnswer(option: string) {
    if (option === this.questions[this.currentQuestionIndex].answer) {
      this.score++;
    }

    this.currentQuestionIndex++;

    if (this.currentQuestionIndex >= this.questions.length) {
      this.quizCompleted = true;
    }
  }

  restartQuiz() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.quizCompleted = false;
  }
}
