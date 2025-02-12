"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  BookOpen, Code, Brain, Rocket, Youtube,
  CheckCircle2, Circle, Calendar, Library,
  Timer, Target, Star, Video, Pencil,
  ArrowRight, ChevronDown, ChevronUp, 
  PlayCircle, GraduationCap, Layout,
  FileCode, GitBranch, Database, ChartBar
} from 'lucide-react';

const MLDashboard = () => {
  const [selectedPhase, setSelectedPhase] = useState(1);
  const [activeMonth, setActiveMonth] = useState(1);
  const [progress, setProgress] = useState({});
  const [showResources, setShowResources] = useState(false);

  // Actual roadmap content from the document
  const phases = [
    {
      id: 1,
      title: "Build Core Skills",
      duration: "Months 1-6",
      focus: "60% coding/math, 30% ML basics, 10% early research exposure",
      color: "from-blue-500 to-cyan-500",
      icon: <Code className="w-6 h-6" />,
      months: {
        "1-2": {
          title: "Programming & Data Engineering",
          skills: [
            { name: "Python Mastery", topics: ["NumPy", "Pandas", "Matplotlib"] },
            { name: "SQL Proficiency", topics: ["Complex Queries", "Database Design"] },
            { name: "Version Control", topics: ["Git", "GitHub Portfolio"] }
          ],
          projects: [
            {
              name: "Task Management System",
              details: "Build database with users, projects, tasks tables",
              complexity: "Advanced"
            },
            {
              name: "Kaggle Titanic",
              details: "Aim for top percentile score",
              complexity: "Intermediate"
            }
          ],
          resources: [
            {
              type: "Book",
              name: "Python for Data Analysis",
              author: "Wes McKinney"
            },
            {
              type: "Platform",
              name: "SQLZoo",
              category: "Interactive Learning"
            }
          ]
        },
        "3-4": {
          title: "Mathematics & Statistics",
          skills: [
            { name: "Linear Algebra", topics: ["Matrices", "Vectors", "Eigenvalues"] },
            { name: "Probability", topics: ["Bayesian Stats", "Distributions"] },
            { name: "Calculus", topics: ["Derivatives", "Backpropagation"] }
          ],
          videos: [
            {
              title: "Backpropagation Explained",
              duration: "12:47",
              platform: "3Blue1Brown"
            },
            {
              title: "Neural Networks from Scratch",
              duration: "31:28",
              author: "Samson Zhang"
            }
          ],
          projects: [
            {
              name: "Implementation Series",
              details: "Build logistic regression, linear regression from scratch",
              complexity: "Advanced"
            }
          ]
        },
        "5-6": {
          title: "ML Fundamentals",
          skills: [
            { name: "Algorithms", topics: ["Decision Trees", "SVMs", "k-means"] },
            { name: "Model Evaluation", topics: ["Cross-validation", "Metrics"] }
          ],
          projects: [
            {
              name: "Kaggle Competition",
              details: "Aim for top 25% in Getting Started competition",
              complexity: "Advanced"
            }
          ]
        }
      }
    },
    {
      id: 2,
      title: "Deep Learning & Research",
      duration: "Months 7-12",
      focus: "40% DL, 40% research, 20% systems",
      color: "from-purple-500 to-pink-500",
      icon: <Brain className="w-6 h-6" />,
      months: {
        "7-8": {
          title: "Deep Learning Foundations",
          skills: [
            { name: "PyTorch", topics: ["Tensors", "Autograd", "Neural Nets"] },
            { name: "Architectures", topics: ["CNNs", "RNNs", "Transformers"] }
          ],
          videos: [
            {
              title: "Neural Networks Explained",
              duration: "18:40",
              platform: "3Blue1Brown"
            },
            {
              title: "Let's build GPT",
              duration: "1:56:20",
              author: "Andrej Karpathy"
            }
          ]
        }
      }
    }
  ];

  const calculateProgress = (phaseId, monthRange) => {
    const key = `${phaseId}-${monthRange}`;
    return progress[key] || 0;
  };

  const renderMonth = (phase, monthRange) => {
    const monthData = phase.months[monthRange];
    if (!monthData) return null;

    return (
      <div className="space-y-6 animate-fadeIn">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-500" />
            Months {monthRange}: {monthData.title}
          </h3>
          <div className="flex items-center gap-2">
            <Progress value={calculateProgress(phase.id, monthRange)} className="w-24" />
            <span className="text-sm font-medium">{calculateProgress(phase.id, monthRange)}%</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Skills Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="w-5 h-5 text-green-500" />
                Core Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthData.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Checkbox 
                        id={`skill-${idx}`}
                        className="data-[state=checked]:bg-green-500"
                      />
                      <label htmlFor={`skill-${idx}`} className="font-medium">
                        {skill.name}
                      </label>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-6">
                      {skill.topics.map((topic, topicIdx) => (
                        <Badge key={topicIdx} variant="outline">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Projects Section */}
          {monthData.projects && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-purple-500" />
                  Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {monthData.projects.map((project, idx) => (
                    <div key={idx} className="p-3 bg-gray-50 rounded-lg space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Checkbox 
                            id={`project-${idx}`}
                            className="data-[state=checked]:bg-purple-500"
                          />
                          <label htmlFor={`project-${idx}`} className="font-medium">
                            {project.name}
                          </label>
                        </div>
                        <Badge 
                          variant="secondary"
                          className={
                            project.complexity === "Advanced" 
                              ? "bg-orange-100 text-orange-800"
                              : "bg-blue-100 text-blue-800"
                          }
                        >
                          {project.complexity}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 ml-6">{project.details}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Resources & Videos Section */}
        {(monthData.resources || monthData.videos) && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Library className="w-5 h-5 text-blue-500" />
                Learning Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {monthData.resources?.map((resource, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <BookOpen className="w-5 h-5 text-green-500 mt-1" />
                    <div>
                      <div className="font-medium">{resource.name}</div>
                      <div className="text-sm text-gray-600">
                        {resource.author && `By ${resource.author}`}
                        {resource.category && `Category: ${resource.category}`}
                      </div>
                    </div>
                  </div>
                ))}
                {monthData.videos?.map((video, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Youtube className="w-5 h-5 text-red-500 mt-1" />
                    <div>
                      <div className="font-medium">{video.title}</div>
                      <div className="text-sm text-gray-600">
                        {video.author || video.platform} • {video.duration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">ML Engineering Roadmap</h1>
            <p className="text-gray-600 mt-1">Your personalized learning journey</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Layout className="w-4 h-4" />
              Dashboard
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <ChartBar className="w-4 h-4" />
              Progress
            </Button>
          </div>
        </div>

        {/* Phase Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {phases.map((phase) => (
            <Card 
              key={phase.id}
              className={`cursor-pointer transition-all duration-200 ${
                selectedPhase === phase.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setSelectedPhase(phase.id)}
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${phase.color} flex items-center justify-center text-white mb-3`}>
                  {phase.icon}
                </div>
                <CardTitle className="text-lg">Phase {phase.id}</CardTitle>
                <CardDescription>{phase.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-600">{phase.duration}</div>
                <div className="text-sm text-gray-600 mt-1">{phase.focus}</div>
                <Progress value={65} className="mt-4" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Month Selection */}
        {selectedPhase && (
          <div className="grid grid-cols-3 gap-2">
            {Object.keys(phases[selectedPhase - 1].months).map((monthRange) => (
              <Button
                key={monthRange}
                variant={activeMonth === monthRange ? "default" : "outline"}
                className={`flex items-center gap-2 ${
                  activeMonth === monthRange ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => setActiveMonth(monthRange)}
              >
                <Calendar className="w-4 h-4" />
                Months {monthRange}
              </Button>
            ))}
          </div>
        )}

        {/* Content Area */}
        {selectedPhase && activeMonth && (
          <div className="mt-6">
            {renderMonth(phases[selectedPhase - 1], activeMonth)}
          </div>
        )}
      </div>
    </div>
  );
};

export default MLDashboard;