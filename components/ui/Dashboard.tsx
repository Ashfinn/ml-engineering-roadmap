"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Code, Brain, Rocket, Youtube,
  Calendar, Library,
  Target, Layout,
  ChartBar, BookOpen
} from 'lucide-react';

// Improved type definitions with better strictness
type Complexity = "Beginner" | "Intermediate" | "Advanced";

type Skill = {
  id: string;
  name: string;
  topics: string[];
  completed?: boolean;
};

type Project = {
  id: string;
  name: string;
  details: string;
  complexity: Complexity;
  completed?: boolean;
};

type Resource = {
  id: string;
  type: "Book" | "Platform" | "Course";
  name: string;
  author?: string;
  category?: string;
};

type Video = {
  id: string;
  title: string;
  duration: string;
  platform?: string;
  author?: string;
};

interface MonthData {
  title: string;
  skills: Skill[];
  projects: Project[];
  resources?: Resource[];
  videos?: Video[];
}

type Phase = {
  id: number;
  title: string;
  duration: string;
  focus: string;
  color: string;
  icon: React.JSX.Element;
  months: Record<string, MonthData>;
  progress?: number;
};

const MLDashboard = () => {
  const [selectedPhase, setSelectedPhase] = useState<number>(1);
  const [activeMonth, setActiveMonth] = useState<string>("1-2");
  const [completionState, setCompletionState] = useState<Record<string, boolean>>({});
  const [phaseProgress, setPhaseProgress] = useState<Record<string, number>>({});

  // Initial data structure
  const phases: Phase[] = [
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
            { 
              id: "s1",
              name: "Python Mastery", 
              topics: ["NumPy", "Pandas", "Matplotlib"] 
            },
            { 
              id: "s2",
              name: "SQL Proficiency", 
              topics: ["Complex Queries", "Database Design"] 
            },
            { 
              id: "s3",
              name: "Version Control", 
              topics: ["Git", "GitHub Portfolio"] 
            }
          ],
          projects: [
            {
              id: "p1",
              name: "Task Management System",
              details: "Build database with users, projects, tasks tables",
              complexity: "Advanced"
            },
            {
              id: "p2",
              name: "Kaggle Titanic",
              details: "Aim for top percentile score",
              complexity: "Intermediate"
            }
          ],
          resources: [
            {
              id: "r1",
              type: "Book",
              name: "Python for Data Analysis",
              author: "Wes McKinney"
            },
            {
              id: "r2",
              type: "Platform",
              name: "SQLZoo",
              category: "Interactive Learning"
            }
          ]
        },
        "3-4": {
          title: "Mathematics & Statistics",
          skills: [
            { 
              id: "s4",
              name: "Linear Algebra", 
              topics: ["Matrices", "Vectors", "Eigenvalues"] 
            },
            { 
              id: "s5",
              name: "Probability", 
              topics: ["Bayesian Stats", "Distributions"] 
            },
            { 
              id: "s6",
              name: "Calculus", 
              topics: ["Derivatives", "Backpropagation"] 
            }
          ],
          projects: [
            {
              id: "p3",
              name: "Implementation Series",
              details: "Build logistic regression, linear regression from scratch",
              complexity: "Advanced"
            }
          ],
          videos: [
            {
              id: "v1",
              title: "Backpropagation Explained",
              duration: "12:47",
              platform: "3Blue1Brown"
            },
            {
              id: "v2",
              title: "Neural Networks from Scratch",
              duration: "31:28",
              author: "Samson Zhang"
            }
          ]
        },
        "5-6": {
          title: "ML Fundamentals",
          skills: [
            { 
              id: "s7",
              name: "Algorithms", 
              topics: ["Decision Trees", "SVMs", "k-means"] 
            },
            { 
              id: "s8",
              name: "Model Evaluation", 
              topics: ["Cross-validation", "Metrics"] 
            }
          ],
          projects: [
            {
              id: "p4",
              name: "Kaggle Competition",
              details: "Aim for top 25% in Getting Started competition",
              complexity: "Advanced"
            }
          ],
          resources: [
            {
              id: "r3",
              type: "Course",
              name: "Machine Learning Specialization",
              author: "Andrew Ng",
              category: "Online Course"
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
            { 
              id: "s9",
              name: "PyTorch", 
              topics: ["Tensors", "Autograd", "Neural Nets"] 
            },
            { 
              id: "s10",
              name: "Architectures", 
              topics: ["CNNs", "RNNs", "Transformers"] 
            }
          ],
          projects: [
            {
              id: "p5",
              name: "Image Classification",
              details: "Build and train a CNN for CIFAR-10",
              complexity: "Advanced"
            }
          ],
          videos: [
            {
              id: "v3",
              title: "Neural Networks Explained",
              duration: "18:40",
              platform: "3Blue1Brown"
            },
            {
              id: "v4",
              title: "Let's build GPT",
              duration: "1:56:20",
              author: "Andrej Karpathy"
            }
          ],
          resources: [
            {
              id: "r4",
              type: "Book",
              name: "Deep Learning with PyTorch",
              author: "Eli Stevens",
              category: "Technical Book"
            }
          ]
        },
        "9-10": {
          title: "Advanced Topics & Research",
          skills: [
            { 
              id: "s11",
              name: "Research Skills", 
              topics: ["Paper Reading", "Experimentation", "Ablation Studies"] 
            },
            { 
              id: "s12",
              name: "Advanced DL", 
              topics: ["Attention", "Self-Supervision", "Diffusion Models"] 
            }
          ],
          projects: [
            {
              id: "p6",
              name: "Research Paper Implementation",
              details: "Implement a recent paper from top conferences",
              complexity: "Advanced"
            }
          ],
          resources: [
            {
              id: "r5",
              type: "Platform",
              name: "Papers with Code",
              category: "Research Resource"
            }
          ]
        },
        "11-12": {
          title: "Systems & Deployment",
          skills: [
            { 
              id: "s13",
              name: "ML Systems", 
              topics: ["Model Serving", "Scaling", "MLOps"] 
            },
            { 
              id: "s14",
              name: "Production ML", 
              topics: ["Monitoring", "A/B Testing", "CI/CD"] 
            }
          ],
          projects: [
            {
              id: "p7",
              name: "End-to-End ML System",
              details: "Deploy a model with monitoring and CI/CD",
              complexity: "Advanced"
            }
          ],
          resources: [
            {
              id: "r6",
              type: "Course",
              name: "Full Stack Deep Learning",
              category: "Online Course"
            }
          ]
        }
      }
    }
  ];

  // Calculate progress for items in the current view
  useEffect(() => {
    if (!selectedPhase || !activeMonth) return;
    
    const currentPhase = phases.find(p => p.id === selectedPhase);
    if (!currentPhase) return;

    const monthData = currentPhase.months[activeMonth];
    if (!monthData) return;

    const totalItems = (monthData.skills?.length || 0) + (monthData.projects?.length || 0);
    const completedItems = Object.values(completionState).filter(Boolean).length;
    
    const newProgress = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
    
    setPhaseProgress(prev => ({
      ...prev,
      [`${selectedPhase}-${activeMonth}`]: newProgress
    }));
  }, [completionState, selectedPhase, activeMonth]);

  // Handle item completion
  const handleCompletion = (id: string, completed: boolean) => {
    setCompletionState(prev => ({
      ...prev,
      [id]: completed
    }));
  };

  const renderMonth = (phase: Phase, monthRange: string) => {
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
            <Progress 
              value={phaseProgress[`${phase.id}-${monthRange}`] || 0} 
              className="w-24" 
            />
            <span className="text-sm font-medium">
              {phaseProgress[`${phase.id}-${monthRange}`] || 0}%
            </span>
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
                {monthData.skills.map((skill) => (
                  <div key={skill.id} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Checkbox 
                        id={skill.id}
                        checked={completionState[skill.id] || false}
                        onCheckedChange={(checked) => 
                          handleCompletion(skill.id, checked as boolean)
                        }
                        className="data-[state=checked]:bg-green-500"
                      />
                      <label htmlFor={skill.id} className="font-medium">
                        {skill.name}
                      </label>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-6">
                      {skill.topics.map((topic, topicIdx) => (
                        <Badge key={`${skill.id}-${topicIdx}`} variant="outline">
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
          {monthData.projects && monthData.projects.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-purple-500" />
                  Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {monthData.projects.map((project) => (
                    <div key={project.id} className="p-3 bg-gray-50 rounded-lg space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Checkbox 
                            id={project.id}
                            checked={completionState[project.id] || false}
                            onCheckedChange={(checked) => 
                              handleCompletion(project.id, checked as boolean)
                            }
                            className="data-[state=checked]:bg-purple-500"
                          />
                          <label htmlFor={project.id} className="font-medium">
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
                {monthData.resources?.map((resource) => (
                  <div key={resource.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <BookOpen className="w-5 h-5 text-green-500 mt-1" />
                    <div>
                      <div className="font-medium">{resource.name}</div>
                      <div className="text-sm text-gray-600">
                        {resource.author && `By ${resource.author}`}
                        {resource.category && ` • ${resource.category}`}
                      </div>
                    </div>
                  </div>
                ))}
                {monthData.videos?.map((video) => (
                  <div key={video.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
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
                <Progress 
                  value={phaseProgress[`${phase.id}-${activeMonth}`] || 0} 
                  className="mt-4" 
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Month Selection */}
        {selectedPhase && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
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