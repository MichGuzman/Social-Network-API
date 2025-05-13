import { Schema, model, Document, Types } from 'mongoose';

// ─────────────────────────────────────────────────────────────
// INTERFACES

export interface ReactionType {
  reactionId: Types.ObjectId;
  reactionBody: string;
  username: string;
  createdAt: Date;
}

export interface ThoughtDocument extends Document {
  thoughtText: string;
  createdAt: Date;
  username: string;
  reactions: ReactionType[];
  reactionCount: number;
}

// ─────────────────────────────────────────────────────────────
// FUNCIÓN GETTER GLOBAL

// Esta función transforma la fecha en string legible
const formatTimestamp = (val: unknown): string => {
  return new Date(val as string).toLocaleString();
};

// ─────────────────────────────────────────────────────────────
// SUBDOCUMENTO REACTION

const reactionSchema = new Schema<ReactionType>(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280
    },
    username: {
      type: String,
      required: true
    },
createdAt: {
  type: Date,
  default: Date.now,
  get: formatTimestamp
} as any,
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

// ─────────────────────────────────────────────────────────────
// ESQUEMA THOUGHT

const thoughtSchema = new Schema<ThoughtDocument>(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
  createdAt: {
  type: Date,
  default: Date.now,  
  get: formatTimestamp
} as any,
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

// Virtual para contar reacciones
thoughtSchema.virtual('reactionCount').get(function (this: ThoughtDocument) {
  return this.reactions.length;
});

// Modelo
const Thought = model<ThoughtDocument>('Thought', thoughtSchema);

export { Thought };
